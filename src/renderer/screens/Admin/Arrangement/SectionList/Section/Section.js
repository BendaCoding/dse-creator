import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { AddSnippetModal } from './AddSnippetModal';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Snippet } from '../Snippet';
import { DRAG_TYPES } from '../constants';
import { SectionHeader } from './SectionHeader';
import { useModal } from '@@utils';
import { EditSectionModal } from './EditSectionModal';

export const Section = ({ name, snippets, id: sectionId, sectionIndex }) => {
  const {
    isModalOpen: isSnippetModalOpen,
    toggleModal: toggleSnippetModal
  } = useModal();

  const {
    isModalOpen: isSectionModalOpen,
    toggleModal: toggleSectionModal
  } = useModal();

  return (
    <Draggable draggableId={sectionId} index={sectionIndex}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Fragment>
          <Box mb={3} ref={innerRef} {...draggableProps}>
            <Droppable droppableId={sectionId} type={DRAG_TYPES.SNIPPET}>
              {provided => (
                <div ref={provided.innerRef}>
                  <SectionHeader
                    {...{
                      name,
                      toggleSectionModal,
                      toggleSnippetModal,
                      dragHandleProps
                    }}
                  />

                  {snippets.map(({ id, ...rest }, index) => (
                    <Snippet key={id} {...{ index, id, sectionId, ...rest }} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
          {isSnippetModalOpen && (
            <AddSnippetModal
              {...{
                isModalOpen: isSnippetModalOpen,
                toggleModal: toggleSnippetModal,
                sectionIndex
              }}
            />
          )}
          {isSectionModalOpen && (
            <EditSectionModal
              {...{
                isModalOpen: isSectionModalOpen,
                toggleModal: toggleSectionModal,
                name
              }}
            />
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
