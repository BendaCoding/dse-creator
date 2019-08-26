import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import {
  EditorState,
  convertFromRaw,
  SelectionState,
  Modifier,
  ContentState
} from 'draft-js';
import { PLACEHOLDERS } from '../../../../constants';

const findWithRegex = (regex, contentBlock, callback) => {
  const text = contentBlock.getText();
  let matchArr, start, end;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    end = start + matchArr[0].length;
    callback(start, end);
  }
};

const getSelectionsForPlaceholders = ({ blockMap }) =>
  Object.entries(PLACEHOLDERS).reduce((acc, [key, placeholder]) => {
    const selections = [];
    blockMap.forEach(contentBlock => {
      findWithRegex(
        new RegExp(placeholder, 'g'),
        contentBlock,
        (start, end) => {
          const blockKey = contentBlock.getKey();
          const blockSelection = SelectionState.createEmpty(blockKey).merge({
            anchorOffset: start,
            focusOffset: end
          });

          selections.push(blockSelection);
        }
      );
    });
    return selections.length ? [...acc, { key, selections }] : acc;
  }, []);

const addSnippetToEditor = (editorState, raw, values) => {
  // new ContentBlocks
  let newContentState = convertFromRaw(raw);
  let newBlockMap = newContentState.getBlockMap();

  // replace placeholders
  const selectionsToReplace = getSelectionsForPlaceholders({
    blockMap: newBlockMap
  });

  console.log(selectionsToReplace);
  console.log(values);

  selectionsToReplace.forEach(({ key, selections }) => {
    console.log('###', key, values.general);
    const replace = getOr('', ['general', key], values);
    selections.forEach(selectionState => {
      newContentState = Modifier.replaceText(
        newContentState,
        selectionState,
        replace
      );
    });
  });

  let result;
  if (!editorState) {
    result = EditorState.createWithContent(newContentState);
  } else {
    // current
    const currentContentState = editorState.getCurrentContent();
    const currentBlockMap = currentContentState.getBlockMap();

    newBlockMap = newContentState.getBlockMap();

    // Combine
    const combinedBlockMap = currentBlockMap.concat(newBlockMap);
    const combinedContentState = ContentState.createFromBlockArray(
      combinedBlockMap.toArray()
    );

    // Push EditorState while excluding changes from undo/redo stack
    const stateNoUndo = EditorState.set(editorState, { allowUndo: false });
    const newState = EditorState.push(
      stateNoUndo,
      combinedContentState,
      'insert-fragment'
    );
    result = EditorState.set(newState, { allowUndo: true });
  }

  return result;
};

export const createEditorState = ({ values, sections }) => {
  let editorState;

  sections.forEach(section => {
    const sectionName = camelCase(section.name);

    section.snippets.forEach(snippet => {
      const snippetSelection = getOr(
        false,
        `${sectionName}.${snippet.id}`,
        values
      );

      if (snippet.alwaysShow || snippetSelection) {
        editorState = addSnippetToEditor(editorState, snippet.data, values);
      }
    });
  });

  return editorState;
};
