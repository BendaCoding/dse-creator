import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../../../store/arrangement';
import { Section } from './Section';
import { Box } from 'rebass';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DRAG_TYPES } from './constants';

export const SectionList = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectors.getSections);

  const onDragEnd = ({ destination, source, type, draggableId }) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === DRAG_TYPES.SECTION) {
      dispatch(
        actions.reorderSection({ from: source.index, to: destination.index })
      );
    } else if (type === DRAG_TYPES.SNIPPET) {
      dispatch(
        actions.reorderSnippet({
          from: { index: source.index, sectionId: source.droppableId },
          to: { index: destination.index, sectionId: destination.droppableId }
        })
      );
    }
  };
  console.log(sections);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box mt={3}>
        <Droppable droppableId="sectionList" type={DRAG_TYPES.SECTION}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sections.map((section, sectionIndex) => (
                <Section key={section.name} {...{ ...section, sectionIndex }} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
};
