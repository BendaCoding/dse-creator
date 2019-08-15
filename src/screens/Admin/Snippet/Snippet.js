import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { useForm } from '../../../utils';

import { actions, selectors } from '../../../store/arrangement';

export const Snippet = ({ history, match: { params } }) => {
  const dispatch = useDispatch();
  const snippet = useSelector(state => selectors.getSnippet(state, params));

  const { values, handleChange, handleSubmit } = useForm(
    {
      name: '',
      title: '',
      text: '',
      ...snippet
    },
    values => {
      console.log('params', params);
      dispatch(actions.editSnippet({ ...params, snippet: { ...values } }));
      history.push('/admin');
    }
  );

  const onBack = () => history.goBack();

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
        <Button onClick={handleSubmit} primary>
          Speichern
        </Button>
        <Button onClick={onBack}>Zurück</Button>
      </Form>
    </Tab.Pane>
  );
};

export default withRouter(Snippet);
