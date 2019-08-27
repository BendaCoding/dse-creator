import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Icon, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '@@store/arrangement';
import { Input } from '@@components';
import uuid from 'uuid/v4';

export const AddSectionModal = ({ isModalOpen, onCloseModal }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onAddSection = () => {
    dispatch(actions.addSection({ name, id: uuid() }));
    setName('');
    onCloseModal();
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal} basic size="small">
      <Header icon="browser" content="Neue Sektion" />
      <Modal.Content>
        <Form onSubmit={onAddSection}>
          <h3>Name</h3>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={onAddSection} inverted>
          <Icon name="checkmark" /> Sektion erstellen
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

AddSectionModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};
