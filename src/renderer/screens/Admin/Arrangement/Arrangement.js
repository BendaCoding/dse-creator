import React from 'react';
import { Button, Tab } from 'semantic-ui-react';
import { SectionList } from './SectionList';
import { AddSectionModal } from './AddSectionModal';
import { useModal } from '@@utils';

export const Arrangement = () => {
  const { isModalOpen, onOpenModal, onCloseModal } = useModal();

  return (
    <Tab.Pane>
      <h3>Sektionen und Text Bausteine</h3>
      <p>
        Die DSE ist in Sektionen (z.B. Intro, Tools) aufgeteilt. Jede Sektion
        enthält beliebig viele Text Bausteine, die konditional ein oder
        ausgeschaltet werden können.
      </p>
      <Button basic onClick={onOpenModal}>
        Sektion erstellen
      </Button>

      <SectionList />
      <AddSectionModal {...{ isModalOpen, onCloseModal }} />
    </Tab.Pane>
  );
};
