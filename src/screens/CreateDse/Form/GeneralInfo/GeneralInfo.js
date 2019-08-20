import React from 'react';
import { FormInput } from '@@components';
import { Flex, Box } from 'rebass';

export const GeneralInfo = () => (
  <>
    <h3>Auftraggeber</h3>
    <Flex flexDirection="column">
      <FormInput name="general.name" placeholder="Name / Firma" />
      <FormInput name="general.street" placeholder="Straße" />
      <Flex>
        <Box width={1 / 4} mr={15}>
          <FormInput name="general.postCode" placeholder="PLZ" />
        </Box>
        <Box width={3 / 4}>
          <FormInput name="general.city" placeholder="Stadt" />
        </Box>
      </Flex>
      <FormInput name="general.country" placeholder="Land" />
    </Flex>

    <h3>Datenschutzbeauftragter</h3>
    <FormInput
      name="general.dataProtectionOfficer"
      placeholder="Datenschutzbeauftragter"
    />
  </>
);
