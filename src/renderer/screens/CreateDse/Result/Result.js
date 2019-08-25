import React, { useState, useEffect, useContext } from 'react';
import { Flex } from 'rebass';
import { useSelector } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import { FormContext } from '@@utils/';
import { selectors } from '@@store/arrangement';
import { Editor } from 'react-draft-wysiwyg';
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

const createEditorState = ({ values, sections }) => {
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
        console.log('Add', snippet.name);
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

export const Result = () => {
  const { values } = useContext(FormContext);
  const sections = useSelector(selectors.getSections);
  const [editorState, setEditorState] = useState(false);

  useEffect(() => {
    console.log('##### CREATE STATE');
    const newEditorState = createEditorState({
      values,
      sections
    });
    setEditorState(newEditorState);
  }, [sections, values]);

  return (
    <>
      <Flex justifyContent="center" />
      <h3>Deine Datenschutzerklärung</h3>
      <Tab.Pane>
        <Editor
          editorState={editorState}
          onEditorStateChange={state => setEditorState(state)}
        />
      </Tab.Pane>
    </>
  );
};
