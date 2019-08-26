import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { FormContext } from '@@utils';
import getOr from 'lodash/fp/getOr';

export const Input = props => (
  <S.Wrap>
    <S.Input {...props} />
  </S.Wrap>
);

export const FormInput = props => {
  const { values = {}, handleChange = () => null } = useContext(FormContext);
  const value = getOr('', props.name, values);

  return <Input {...{ ...props, onChange: handleChange, value }} />;
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired
};
