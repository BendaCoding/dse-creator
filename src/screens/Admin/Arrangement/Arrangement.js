import React from 'react';
import { Button, Tab } from 'semantic-ui-react';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';

import { actions } from '../../../store/arrangement';
import { SectionList } from './SectionList';

export const Arrangement = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Pane>
      <Button
        basic
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
