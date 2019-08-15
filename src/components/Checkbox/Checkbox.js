import React from 'react';
import * as S from './styled';
import { Checkbox as BaseCheckbox } from 'semantic-ui-react';

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
