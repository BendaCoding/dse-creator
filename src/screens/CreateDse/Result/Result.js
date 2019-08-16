import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import { useSelector } from 'react-redux';
import { Button, TextArea, Form } from 'semantic-ui-react';
import camelCase from 'lodash/fp/camelCase';
import getOr from 'lodash/fp/getOr';
import { FormContext } from '@@utils/';
import { selectors } from '@@store/arrangement';

const getText = (values, sections) =>
  sections.reduce((result, section) => {
    const sectionName = camelCase(section.name);

    const sectionText = section.snippets.reduce((sectionResult, snippet) => {
      const snippetSelection = getOr(
        false,
        `${sectionName}.${snippet.id}`,
        values
      );

      const log = `${snippet.name} was ${
        snippetSelection ? 'selected' : 'not selected'
      }`;

      console.log(log);

      if (snippet.alwaysShow || snippetSelection) {
        if (snippet.title) {
          sectionResult += snippet.title + '\n';
        }
        sectionResult += snippet.text + '\n';
      }

      return sectionResult;
    }, '');
    console.log('sectionText', sectionText);

    result += sectionText;
    return result;
  }, '');

export const Result = () => {
  const { values } = useContext(FormContext);
  const sections = useSelector(selectors.getSections);

  const text = getText(values, sections);

  return (
    <>
      <Flex justifyContent="center" />
      <h3>Deine Datenschutzerklärung</h3>
      <Form>
        <TextArea style={{ minHeight: 500 }}>{text}</TextArea>
      </Form>
    </>
  );
};
