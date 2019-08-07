import React from 'react';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../../store/arrangement';
import { Input } from '../../../../../components/Input/Input';

export const AddGroupModal = ({ isModalOpen, onCloseModal, sectionIndex }) => {
  const dispatch = useDispatch();
  const onAddGroup = () => {
    dispatch(actions.addGroup({ sectionIndex }));
    onCloseModal();
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal} basic size="small">
      <Header icon="browser" content="Cookies policy" />
      <Modal.Content>
        <h3>This website uses cookies to ensure the best user experience.</h3>
        <Input />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={onAddGroup} inverted>
          <Icon name="checkmark" /> Add Group
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
