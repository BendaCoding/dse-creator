import { useState, createContext } from 'react';
import set from 'lodash/fp/set';

export const FormContext = createContext({});

export const useForm = (initialValues = {}, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(values);
  };

  const handleChange = event => {
    event.persist();
    setValues(inputs => set(event.target.name, event.target.value, inputs));
  };

  return {
    handleSubmit,
    handleChange,
    values
  };
};
