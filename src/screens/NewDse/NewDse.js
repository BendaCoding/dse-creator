import React from 'react';
import { Box, Flex } from 'rebass';
import { Input, Checkbox } from '../../components';
import { Button } from 'semantic-ui-react';

export const NewDse = () => (
  <Flex justifyContent="center">
    <Box width={1 / 2}>
      <h3>Auftraggeber</h3>
      <Flex flexDirection="column">
        <Input placeholder="Name / Firma" />
        <Input placeholder="Straße" />
        <Flex>
          <Box width={1 / 4} mr={15}>
            <Input placeholder="PLZ" />
          </Box>
          <Box width={3 / 4}>
            <Input placeholder="Stadt" />
          </Box>
        </Flex>
        <Input placeholder="Land" />
      </Flex>

      <h3>Datenschutzbeauftragter</h3>
      <Input placeholder="Datenschutzbeauftragter" />

      <h3>Verwendete Services</h3>
      <Checkbox label="Google Analytics" />
      <Checkbox label="Piwik" />
      <Checkbox label="Webtrekk" />
      <Checkbox label="Userlane" />
      <Checkbox label="BootzSpy" />

      <Box mt={4}>
        <Button primary>Datenschutzerklärung generieren</Button>
      </Box>
    </Box>
  </Flex>
);
