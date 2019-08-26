import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Form, Button, Popup } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Flex, Box } from 'rebass';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

import { useForm } from '@@utils';
import { Editor, Checkbox } from '@@components';

import { actions, selectors } from '@@store/arrangement';

const getEditorStateFromRawData = rawData =>
  EditorState.createWithContent(convertFromRaw(rawData));

export const Snippet = ({ history, match: { params } }) => {
  const dispatch = useDispatch();
  const snippet = useSelector(state => selectors.getSnippet(state, params));

  const editorState = snippet.data
    ? getEditorStateFromRawData(snippet.data)
    : EditorState.createEmpty();

  const formData = {
    ...snippet,
    data: editorState
  };

  const { values, handleChange, handleSubmit } = useForm(formData, values => {
    const data = convertToRaw(values.data.getCurrentContent());
    dispatch(
      actions.editSnippet({
        ...params,
        snippet: { ...values, data }
      })
    );
    history.push('/admin');
  });
  console.log(values);

  const onBack = e => {
    e.preventDefault();
    history.push('/admin');
  };

  const onDelete = e => {
    e.preventDefault();
    dispatch(actions.removeSnippet({ ...params }));
    history.push('/admin');
  };

  const onEditorChange = state => {
    const event = {
      persist: () => null,
      target: { name: 'data', value: state }
    };
    handleChange(event);
  };

  return (
    <Tab.Pane>
      <h3>Baustein: {snippet.name}</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="name"
          onChange={handleChange}
          label="Name"
          value={values.name || ''}
        />
        <Form.Input
          name="title"
          onChange={handleChange}
          label="Titel"
          value={values.title}
        />
        <Editor
          label="Text"
          editorState={values.data}
          onEditorStateChange={onEditorChange}
          placeholder="Was sagt dieser Baustein?"
          mention={{
            separator: ' ',
            trigger: '@',
            suggestions: [
              { text: 'Name', value: 'name', url: 'apple' },
              { text: 'Straße', value: 'straße', url: 'banana' }
            ]
          }}
        />
        <Popup
          content="Wenn aktiv, wird der Baustein in jede DSE eingefügt, ohne manuelle Selektion"
          trigger={
            <Checkbox
              label="Immer anzeigen"
              name="alwaysShow"
              checked={values.alwaysShow || false}
              onChange={handleChange}
            />
          }
        />
        <Popup
          content="Soll der Baustein für neue DSE's standardmäßig selektiert sein?"
          trigger={
            <Checkbox
              label="Standardmäßig selektiert"
              name="defaultOn"
              disabled={values.alwaysShow}
              checked={values.alwaysShow || values.defaultOn}
              onChange={handleChange}
            />
          }
        />
        <Flex>
          <Button type="submit" onClick={handleSubmit} primary>
            Speichern
          </Button>
          <Button onClick={onBack}>Zurück</Button>
          <Box ml="auto">
            <Button negative onClick={onDelete}>
              Löschen
            </Button>
          </Box>
        </Flex>
      </Form>
    </Tab.Pane>
  );
};

Snippet.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired
};

export default withRouter(Snippet);
