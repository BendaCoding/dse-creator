import React, { useState, useEffect, useContext } from 'react';
import { Flex } from 'rebass';
import { useSelector } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import { FormContext } from '@@utils/';
import { selectors } from '@@store/arrangement';
import { Editor } from '@@components';
import * as U from './utils';

export const Result = () => {
  const { values } = useContext(FormContext);
  const sections = useSelector(selectors.getSections);
  const [editorState, setEditorState] = useState(false);

  useEffect(() => {
    const newEditorState = U.createEditorState({
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
