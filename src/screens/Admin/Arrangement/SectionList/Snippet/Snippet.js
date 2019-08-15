import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import { withRouter } from 'react-router';
import { Flex } from 'rebass';
import * as S from './styled';

export const Snippet = ({ sectionId, id, name, index, history }) => {
  const onSnippetClick = () => history.push(`/admin/${sectionId}/${id}`);

  return (
    <S.Wrap>
      <Draggable draggableId={id} index={index}>
        {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
          <S.Link
            className={isDragging ? 'isDragging' : ''}
            ref={innerRef}
            onClick={onSnippetClick}
            {...{ ...draggableProps }}
          >
            <Segment attached>
              <Flex justifyContent="space-between">
                <span>{name}</span>
                <Icon name="bars" color="grey" {...dragHandleProps} />
              </Flex>
            </Segment>
          </S.Link>
        )}
      </Draggable>
    </S.Wrap>
  );
};

export default withRouter(Snippet);
