import React, { useState, Fragment } from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';
import { AddGroupModal } from './AddGroupModal';

export const Section = ({ name, groups, index: sectionIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <Fragment>
      <Box mb={3}>
        <Header as="h4" attached="top" block>
          <Flex justifyContent="space-between">
            <span>{name}</span>
            <Icon link name="add" onClick={() => setIsModalOpen(true)} />
          </Flex>
        </Header>
        {groups.map(({ name }) => (
          <Segment attached>{name}</Segment>
        ))}
      </Box>
      <AddGroupModal {...{ isModalOpen, onCloseModal, sectionIndex }} />
    </Fragment>
  );
};
