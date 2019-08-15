import { useState } from 'react';

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
    setValues(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleChange,
    values
  };
};
