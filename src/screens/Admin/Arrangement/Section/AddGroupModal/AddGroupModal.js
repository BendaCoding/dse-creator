import React, { useState } from 'react';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../../store/arrangement';
import { Input } from '../../../../../components/Input/Input';

export const AddGroupModal = ({ isModalOpen, onCloseModal, sectionIndex }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onAddGroup = () => {
    dispatch(actions.addGroup({ sectionIndex, name }));
    setName('');
    onCloseModal();
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal} basic size="small">
      <Header icon="browser" content="Neue Gruppe" />
      <Modal.Content>
        <h3>Name</h3>
        <Input value={name} onChange={e => setName(e.target.value)} />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={onAddGroup} inverted>
          <Icon name="checkmark" /> Add Group
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
