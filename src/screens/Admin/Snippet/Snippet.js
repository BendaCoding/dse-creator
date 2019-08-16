import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Form, Button, Popup } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Flex, Box } from 'rebass';

import { useForm } from '@@utils';
import { Checkbox } from '@@components';

import { actions, selectors } from '@@store/arrangement';

export const Snippet = ({ history, match: { params } }) => {
  const dispatch = useDispatch();
  const snippet = useSelector(state => selectors.getSnippet(state, params));

  const { values, handleChange, handleSubmit } = useForm(snippet, values => {
    dispatch(actions.editSnippet({ ...params, snippet: { ...values } }));
    history.push('/admin');
  });

  const onBack = e => {
    e.preventDefault();
    history.push('/admin');
  };

  const onDelete = e => {
    e.preventDefault();
    dispatch(actions.removeSnippet({ ...params }));
    history.push('/admin');
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
        <Form.TextArea
          label="Text"
          name="text"
          value={values.text}
          onChange={handleChange}
          style={{ minHeight: 200 }}
          placeholder="Was sagt dieser Baustein?"
        />
        <Popup
          content="Wenn aktiv, wird der Baustein in jede DSE eingefügt, ohne manuelle Selektion"
          trigger={
            <Checkbox
              label="Immer anzeigen"
              name="alwaysShow"
              checked={values.alwaysShow}
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

export default withRouter(Snippet);
