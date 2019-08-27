import React from 'react';
import { Icon } from 'semantic-ui-react';

import * as S from './styled';
import { version } from '../../../../package.json';

export const Header = () => (
  <S.Wrap>
    <S.Header>DSE Creator v{version}</S.Header>
    <div>
      <S.NavLink to="/admin">
        <Icon name="setting" />
        <label>Admin</label>
      </S.NavLink>
      <S.NavLink exact to="/create">
        <Icon name="add" />
        <label>Neue DSE</label>
      </S.NavLink>
    </div>
  </S.Wrap>
);
