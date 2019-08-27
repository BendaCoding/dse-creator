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
    <Form onSubmit={onAddSnippet}>
      <Modal open={isModalOpen} onClose={toggleModal} basic size="small">
        <Header icon="browser" content="Neue Gruppe" />
        <Modal.Content>
          <h3>Name</h3>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={onAddSnippet} inverted>
            <Icon name="checkmark" /> Add Snippet
          </Button>
        </Modal.Actions>
      </Modal>
    </Form>
  );
};

AddSnippetModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired
};
