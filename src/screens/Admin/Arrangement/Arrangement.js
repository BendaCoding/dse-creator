import React from 'react';
import { Button, Tab } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/arrangement';

// import { Box, Flex } from 'rebass';

export const Arrangement = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Pane>
      <Button
        primary
        onClick={() => dispatch(actions.addGroup({ name: 'asd', id: '1' }))}
      >
        Gruppe erstellen
      </Button>
      <Button>Sektion erstellen</Button>
    </Tab.Pane>
  );
};
