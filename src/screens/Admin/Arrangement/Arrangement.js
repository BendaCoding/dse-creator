import React, { useState } from 'react';
import { Modal, Header, Icon, Button, Tab } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../../store/arrangement';
import { Section } from './Section';
import { Box } from 'rebass';

export const Arrangement = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectors.getSections);

  return (
    <Tab.Pane>
      <Button primary>Gruppe erstellen</Button>
      <Button onClick={() => dispatch(actions.addSection({ name: 'asd' }))}>
        Sektion erstellen
      </Button>

      <Box mt={3}>
        {sections.map((section, index) => (
          <Section key={section.name} {...section} index={index} />
        ))}
      </Box>
    </Tab.Pane>
  );
};
