import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';

const addSnippetToEditor = (editorState, raw) => {
  const currentContentState = editorState.getCurrentContent();
  const currentBlockMap = currentContentState.getBlockMap();

  // new ContentBlocks
  const newContentState = convertFromRaw(raw);
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
  const stateAllowUndo = EditorState.set(newState, { allowUndo: true });

  return stateAllowUndo;
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
        if (!editorState) {
          const contentState = convertFromRaw(snippet.data);
          editorState = EditorState.createWithContent(contentState);
        } else {
          editorState = addSnippetToEditor(editorState, snippet.data);
        }
      }
    });
  });

  return editorState;
};
