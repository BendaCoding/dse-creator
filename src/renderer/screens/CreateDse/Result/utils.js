import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import {
  EditorState,
  convertFromRaw,
  SelectionState,
  Modifier,
  ContentState
} from 'draft-js';
import { PLACEHOLDERS } from '@@src/constants';

const findWithRegex = (regex, contentBlock, callback) => {
  const text = contentBlock.getText();
  let matchArr, start, end;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    end = start + matchArr[0].length;
    callback(start, end);
  }
};

const replacePlaceholders = (contentState, values) => {
  let result = contentState;

  Object.entries(PLACEHOLDERS).forEach(([key, placeholder]) => {
    const blockMap = result.getBlockMap();
    const replace = getOr('', ['general', key], values);

    blockMap.forEach(contentBlock => {
      findWithRegex(
        new RegExp(`@${placeholder}`, 'g'),
        contentBlock,
        (start, end) => {
          const blockKey = contentBlock.getKey();
          const blockSelection = SelectionState.createEmpty(blockKey).merge({
            anchorOffset: start,
            focusOffset: end
          });

          result = Modifier.replaceText(result, blockSelection, replace);
        }
      );
    });
  });
  return result;
};

const addSnippetToEditor = (editorState, raw, values) => {
  // new ContentBlocks
  let newContentState = convertFromRaw(raw);
  // replace placeholders
  newContentState = replacePlaceholders(newContentState, values);

  let result;
  if (!editorState) {
    result = EditorState.createWithContent(newContentState);
  } else {
    const currentContentState = editorState.getCurrentContent();
    const currentBlockMap = currentContentState.getBlockMap();
    const newBlockMap = newContentState.getBlockMap();

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
