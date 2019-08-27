import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Icon, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { Flex } from 'rebass';
import { actions } from '@@store/arrangement';
import { Input } from '@@components';

export const EditSectionModal = ({
  id,
  name: currentName,
  isModalOpen,
  toggleModal
}) => {
  const [name, setName] = useState(currentName);
  const dispatch = useDispatch();

  const onEditSection = () => {
    dispatch(actions.editSection({ name, id }));
    setName('');
    toggleModal();
  };

  const onRemoveSection = () => {
    dispatch(actions.removeSection(id));
    toggleModal();
  };

  return (
    <Form onSubmit={onEditSection}>
      <Modal open={isModalOpen} onClose={toggleModal} basic size="small">
        <Header icon="browser" content={`Sektion ändern: ${currentName}`} />
        <Modal.Content>
          <h3>Name</h3>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Modal.Content>
        <Modal.Actions>
          <Flex justifyContent="space-between">
            <Button color="red" onClick={onRemoveSection} inverted>
              <Icon name="delete" /> Sektion löschen
            </Button>
            <Button color="green" onClick={onEditSection} inverted>
              <Icon name="checkmark" /> Sektion ändern
            </Button>
          </Flex>
        </Modal.Actions>
      </Modal>
    </Form>
  );
};

EditSectionModal.propTypes = {
  name: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
