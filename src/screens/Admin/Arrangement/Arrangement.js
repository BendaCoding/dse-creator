import React from 'react';
import { Button, Tab } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/arrangement';
import { SectionList } from './SectionList';

const uuid = require('uuid/v4');

export const Arrangement = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Pane>
      <Button primary>Gruppe erstellen</Button>
      <Button
        onClick={() =>
          dispatch(actions.addSection({ name: 'asd', id: uuid() }))
        }
      >
        Sektion erstellen
      </Button>

      <SectionList />
    </Tab.Pane>
  );
};
