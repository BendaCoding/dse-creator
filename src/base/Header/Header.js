import React from 'react';
import { Icon } from 'semantic-ui-react';

import * as S from './styled';

export const Header = () => (
  <S.Wrap>
    <S.Header>DSE Creator</S.Header>
    <div>
      <S.NavLink to="/admin/snippets">
        <Icon name="setting" />
        <label>Admin</label>
      </S.NavLink>
      <S.NavLink exact to="/">
        <Icon name="add" />
        <label>Neue DSE</label>
      </S.NavLink>
    </div>
  </S.Wrap>
);
