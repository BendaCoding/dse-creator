import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';
import { AddSnippetModal } from './AddSnippetModal';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Snippet } from '../Snippet';
import { DRAG_TYPES } from '../constants';

export const Section = ({ name, snippets, id: sectionId, sectionIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <Draggable draggableId={sectionId} index={sectionIndex}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Fragment>
          <Box mb={3} ref={innerRef} {...draggableProps}>
            <Droppable droppableId={sectionId} type={DRAG_TYPES.SNIPPET}>
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

                  {snippets.map(({ id, ...rest }, index) => (
                    <Snippet key={id} {...{ index, id, sectionId, ...rest }} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
          {isModalOpen && (
            <AddSnippetModal {...{ isModalOpen, onCloseModal, sectionIndex }} />
          )}
        </Fragment>
      )}
    </Draggable>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  snippets: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  sectionIndex: PropTypes.number.isRequired
};
