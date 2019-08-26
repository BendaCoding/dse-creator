import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '@@store/arrangement';
import { useForm, FormContext } from '@@utils';
import { Switch, Route } from 'react-router';
import { Form } from './Form';
import { Result } from './Result';
import { withRouter } from 'react-router';

console.log('ASDASD', window.React1, React);
console.log(window.React1 === React);

export const CreateDse = withRouter(({ match }) => {
  const initialValues = useSelector(selectors.getInitialValues);

  const { values, handleChange } = useForm(initialValues, values => {
    console.log(values, 'submitting');
  });

  return (
    <FormContext.Provider value={{ values, handleChange }}>
      <Switch>
        <Route path="/create" exact component={Form} />
        <Route path="/create/result" component={Result} />
      </Switch>
    </FormContext.Provider>
  );
});
