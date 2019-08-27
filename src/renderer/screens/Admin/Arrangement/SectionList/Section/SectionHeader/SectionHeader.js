import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import * as S from './styled';

export const SectionHeader = ({
  name,
  toggleSectionModal,
  toggleSnippetModal,
  dragHandleProps
}) => (
  <Header
    as="h4"
    attached="top"
    block
    {...dragHandleProps}
    style={{ cursor: 'move' }}
  >
    <S.Container>
      <div>
        <span>{name}</span>
        <S.EditIcon onClick={toggleSectionModal} />
      </div>
      <S.AddIcon onClick={toggleSnippetModal} />
    </S.Container>
  </Header>
);

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
  toggleSectionModal: PropTypes.func.isRequired,
  toggleSnippetModal: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.object.isRequired
};
