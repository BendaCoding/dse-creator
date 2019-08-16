import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '@@store/arrangement';
import { useForm, FormContext } from '@@utils';
import { Switch, Route } from 'react-router';
import { Form } from './Form';

export const CreateDse = () => {
  const initialShit = useSelector(selectors.getInitialValues);
  console.log(initialShit);

  const { values, handleSubmit, handleChange } = useForm(
    initialShit,
    values => {
      console.log(values, 'submitting');
    }
  );

  return (
    <FormContext.Provider value={{ values, handleChange }}>
      <Switch>
        <Route path="" exact component={Form} />
      </Switch>
    </FormContext.Provider>
  );
};
