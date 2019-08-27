import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Box, Flex } from 'rebass';
import { Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import { selectors } from '@@store/arrangement';

import { SectionForm } from './SectionForm';
import { GeneralInfo } from './GeneralInfo';

export const Form = ({ history }) => {
  const sections = useSelector(selectors.getSections);

  const onCreate = () => {
    history.push('/create/result');
  };

  return (
    <Flex justifyContent="center">
      <Box width={1 / 2}>
        <GeneralInfo />

        {sections.map(section => (
          <SectionForm key={section.id} {...section} />
        ))}

        <Box mt={4}>
          <Button onClick={onCreate} primary>
            Datenschutzerklärung generieren
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

Form.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default withRouter(Form);
