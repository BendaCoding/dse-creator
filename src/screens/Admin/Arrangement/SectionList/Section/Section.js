import React, { useState, Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';
import { AddGroupModal } from './AddGroupModal';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Group } from '../Group';
import { DRAG_TYPES } from '../constants';

export const Section = ({ name, groups, id: sectionId, sectionIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <Draggable draggableId={sectionId} index={sectionIndex}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Fragment>
          <Box mb={3} ref={innerRef} {...draggableProps}>
            <Droppable droppableId={sectionId} type={DRAG_TYPES.GROUP}>
              {provided => (
                <div ref={provided.innerRef}>
                  <Header as="h4" attached="top" block {...dragHandleProps}>
                    <Flex justifyContent="space-between">
                      <span>{name}</span>
                      <Icon
                        link
                        name="add"
                        onClick={() => setIsModalOpen(true)}
                      />
                    </Flex>
                  </Header>

                  {groups.map(({ id, name }, index) => (
                    <Group key={id} name={name} index={index} id={id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
          {isModalOpen && (
            <AddGroupModal {...{ isModalOpen, onCloseModal, sectionIndex }} />
          )}
        </Fragment>
      )}
    </Draggable>
  );
};
