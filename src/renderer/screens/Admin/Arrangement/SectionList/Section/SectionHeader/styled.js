import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Flex } from 'rebass';

const iconStyles = css`
  opacity: 0;
  cursor: pointer;
  transition: 0.2s ease-in opacity;
  color: ${({ theme }) => theme.icons.default};
`;

export const EditIcon = styled(Icon).attrs({
  name: 'pencil alternate'
})`
  && {
    margin-left: 7px;
    ${iconStyles};
  }
`;

export const AddIcon = styled(Icon).attrs({ name: 'add' })`
  && {
    ${iconStyles};
  }
`;

export const Container = styled(Flex).attrs({
  justifyContent: 'space-between'
})`
  && {
    margin: -11px -14px;
    padding: 11px 14px;
  }

  &:hover {
    ${EditIcon}, ${AddIcon} {
      opacity: 1;
    }
  }
`;
