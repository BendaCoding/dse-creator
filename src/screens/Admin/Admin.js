import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '../../components';
import { Menu, Segment } from 'semantic-ui-react';
import { Arrangement } from './Arrangement';
import { Snippets } from './Snippets';
import { withRouter } from 'react-router';

const MENU_ITEMS = {
  SNIPPETS: 'SNIPPETS',
  ARRANGEMENT: 'ARRANGEMENT'
};

const MENU_ITEMS_TO_URL = {
  SNIPPETS: '/admin/snippets',
  ARRANGEMENT: '/admin/arrangement'
};

export const Admin = ({ history }) => {
  const [activeItem, setActiveItem] = useState(MENU_ITEMS.SNIPPETS);
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    history.push(MENU_ITEMS_TO_URL[name]);
  };

  return (
    <Container>
      <Menu pointing>
        <Menu.Item
          name={MENU_ITEMS.SNIPPETS}
          active={activeItem === MENU_ITEMS.SNIPPETS}
          onClick={handleItemClick}
        >
          Text Bausteine
        </Menu.Item>
        <Menu.Item
          name={MENU_ITEMS.ARRANGEMENT}
          active={activeItem === MENU_ITEMS.ARRANGEMENT}
          onClick={handleItemClick}
        >
          Anordnung
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path={MENU_ITEMS_TO_URL.SNIPPETS} component={Snippets} />
        <Route path={MENU_ITEMS_TO_URL.ARRANGEMENT} component={Arrangement} />
      </Switch>
    </Container>
  );
};

export default withRouter(Admin);
