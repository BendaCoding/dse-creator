import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '../../components';
import { Menu } from 'semantic-ui-react';
import { Arrangement } from './Arrangement';
import { Snippets } from './Snippets';
import { withRouter } from 'react-router';

const SUB_PATHS = {
  SNIPPETS: '/admin/snippets',
  ARRANGEMENT: '/admin/arrangement'
};

export const Admin = ({ history, match }) => {
  const handleItemClick = (e, { name }) => {
    history.push(name);
  };

  return (
    <Container>
      <Menu pointing>
        <Menu.Item
          name={SUB_PATHS.SNIPPETS}
          active={match.url === SUB_PATHS.SNIPPETS}
          onClick={handleItemClick}
        >
          Text Bausteine
        </Menu.Item>
        <Menu.Item
          name={SUB_PATHS.ARRANGEMENT}
          active={match.url === SUB_PATHS.ARRANGEMENT}
          onClick={handleItemClick}
        >
          Anordnung
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path={SUB_PATHS.SNIPPETS} component={Snippets} />
        <Route path={SUB_PATHS.ARRANGEMENT} component={Arrangement} />
        <Redirect to={SUB_PATHS.ARRANGEMENT} />
      </Switch>
    </Container>
  );
};

export default withRouter(Admin);
