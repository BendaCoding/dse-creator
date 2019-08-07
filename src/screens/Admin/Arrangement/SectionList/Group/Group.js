import React, { forwardRef } from 'react';
import { Segment } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './styled';

export const Group = ({ id, name, index }) => {
  return (
    <S.Wrap>
      <Draggable draggableId={id} index={index}>
        {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
          <div
            className={isDragging && 'isDragging'}
            ref={innerRef}
            {...{ ...draggableProps, ...dragHandleProps }}
          >
            <Segment attached>{name}</Segment>
          </div>
        )}
      </Draggable>
    </S.Wrap>
  );
};
