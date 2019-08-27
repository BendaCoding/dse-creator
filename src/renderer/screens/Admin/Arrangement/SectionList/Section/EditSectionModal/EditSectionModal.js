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
  const [confirmRemove, setConfirmRemove] = useState(false);

  const onEditSection = () => {
    dispatch(actions.editSection({ name, id }));
    setName('');
    toggleModal();
  };

  const onConfirmRemove = () => {
    setConfirmRemove(true);
  };

  const onRemoveSection = () => {
    dispatch(actions.removeSection(id));
    toggleModal();
  };

  return (
    <Modal open={isModalOpen} onClose={toggleModal} basic size="small">
      {!confirmRemove ? (
        <>
          <Header icon="browser" content={`Sektion ändern: ${currentName}`} />
          <Modal.Content>
            <Form onSubmit={onEditSection}>
              <h3>Name</h3>
              <Input
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Flex justifyContent="space-between">
              <Button color="red" onClick={onConfirmRemove} inverted>
                <Icon name="delete" /> Sektion löschen
              </Button>
              <Button color="green" onClick={onEditSection} inverted>
                <Icon name="checkmark" /> Speichern
              </Button>
            </Flex>
          </Modal.Actions>
        </>
      ) : (
        <>
          <Header icon="browser" content={`${currentName} wirklich löschen?`} />
          <Modal.Content>
            <p>
              Die Sektion wird mit allen Textbausteinen unwideruflich gelöscht.
            </p>
            <p>Wirklich fortfahren?</p>
          </Modal.Content>
          <Modal.Actions>
            <Flex justifyContent="space-between">
              <Button onClick={toggleModal} inverted>
                <Icon name="cancel" /> Abbrechen
              </Button>
              <Button color="red" onClick={onRemoveSection} inverted>
                <Icon name="delete" /> Sektion löschen
              </Button>
            </Flex>
          </Modal.Actions>
        </>
      )}
    </Modal>
  );
};

EditSectionModal.propTypes = {
  name: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
