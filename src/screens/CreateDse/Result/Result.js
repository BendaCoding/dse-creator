import React, { useState, useEffect, useContext } from 'react';
import { Box, Flex } from 'rebass';
import { useSelector } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import { FormContext } from '@@utils/';
import { selectors } from '@@store/arrangement';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';

const generateText = (values, sections) =>
  sections.reduce((result, section) => {
    const sectionName = camelCase(section.name);

    const sectionText = section.snippets.reduce((sectionResult, snippet) => {
      const snippetSelection = getOr(
        false,
        `${sectionName}.${snippet.id}`,
        values
      );

      if (snippet.alwaysShow || snippetSelection) {
        sectionResult += snippet.text + '\n';
      }

      return sectionResult;
    }, '');

    result += sectionText;
    return result;
  }, '');

export const Result = () => {
  const { values } = useContext(FormContext);
  const sections = useSelector(selectors.getSections);
  const [text, setText] = useState(null);

  useEffect(() => {
    console.log('compute text');
    setText(
      EditorState.createWithContent(
        ContentState.createFromText(generateText(values, sections))
      )
    );
  }, [sections, values]);

  return (
    <>
      <Flex justifyContent="center" />
      <h3>Deine Datenschutzerklärung</h3>
      <Tab.Pane>
        <Editor
          editorState={text}
          onEditorStateChange={state => setText(state)}
        />
      </Tab.Pane>
      {JSON.stringify(text && convertToRaw(text.getCurrentContent()))}
    </>
  );
};
