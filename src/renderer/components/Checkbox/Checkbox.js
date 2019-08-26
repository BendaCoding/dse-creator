import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { Checkbox as BaseCheckbox } from 'semantic-ui-react';
import getOr from 'lodash/fp/getOr';
import { FormContext } from '@@utils';

export const Checkbox = props => (
  <S.Wrap>
    <BaseCheckbox
      {...props}
      onChange={event => {
        const value = !props.checked;
        props.onChange({
          persist: event.persist,
          target: { value, name: props.name }
        });
      }}
    />
  </S.Wrap>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export const FormCheckbox = props => {
  const { values = {}, handleChange = () => null } = useContext(FormContext);
  const checked = getOr(false, props.name, values);
  return <Checkbox {...props} onChange={handleChange} checked={checked} />;
};

FormCheckbox.propTypes = {
  name: PropTypes.string
};
