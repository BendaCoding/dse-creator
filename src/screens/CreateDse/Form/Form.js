import React from 'react';
import { Box, Flex } from 'rebass';
import { Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectors } from '@@store/arrangement';

import { SectionForm } from './SectionForm';
import { GeneralInfo } from './GeneralInfo';

export const Form = () => {
  const sections = useSelector(selectors.getSections);

  return (
    <Flex justifyContent="center">
      <Box width={1 / 2}>
        <GeneralInfo />

        {sections.map(section => (
          <SectionForm key={section.id} {...section} />
        ))}

        <Box mt={4}>
          <Button onClick={() => null} primary>
            Datenschutzerklärung generieren
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
