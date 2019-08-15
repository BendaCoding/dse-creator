import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import { withRouter } from 'react-router';

import * as S from './styled';

export const Snippet = ({ sectionId, id, name, index, history }) => {
  const onSnippetClick = () => history.push(`/admin/${sectionId}/${id}`);

  return (
    <S.Wrap>
      <Draggable draggableId={id} index={index}>
        {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
          <div
            className={isDragging ? 'isDragging' : ''}
            ref={innerRef}
            {...{ ...draggableProps, ...dragHandleProps }}
          >
            <Segment attached>
              <S.Link onClick={onSnippetClick}>{name}</S.Link>
            </Segment>
          </div>
        )}
      </Draggable>
    </S.Wrap>
  );
};

export default withRouter(Snippet);
