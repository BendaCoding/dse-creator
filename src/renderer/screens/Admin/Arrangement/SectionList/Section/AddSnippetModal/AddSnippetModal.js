import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Icon, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '@@store/arrangement';
import { Input } from '@@components';
import uuid from 'uuid/v4';

export const AddSnippetModal = ({ isModalOpen, toggleModal, sectionIndex }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onAddSnippet = () => {
    dispatch(actions.addSnippet({ sectionIndex, name, id: uuid() }));
    setName('');
    toggleModal();
  };

  return (
    <Modal open={isModalOpen} onClose={toggleModal} basic size="small">
      <Header icon="browser" content="Neuer Baustein" />
      <Modal.Content>
        <Form onSubmit={onAddSnippet}>
          <h3>Name</h3>
          <Input
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={onAddSnippet} inverted>
          <Icon name="checkmark" /> Add Snippet
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

AddSnippetModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired
};
