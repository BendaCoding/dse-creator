import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@@components';
import { Arrangement } from './Arrangement';
import { Snippet } from './Snippet';

export const Admin = () => {
  return (
    <Container>
      {/* <Switch>
        <Route exact path="/admin" component={Arrangement} />
        <Route path="/admin/:sectionId/:snippetId" component={Snippet} />
      </Switch> */}
      Admin -.-
    </Container>
  );
};
