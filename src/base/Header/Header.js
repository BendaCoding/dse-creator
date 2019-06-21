import React from 'react';
import { Icon } from 'semantic-ui-react';

import * as S from './styled';

export const Header = () => (
  <S.Wrap>
    <S.Header>DSE Creator</S.Header>
    <div>
      <S.NavLink to="/admin">
        <label>Admin</label>
        <Icon name="settings" />
      </S.NavLink>
      <S.NavLink exact to="/">
        Neue DSE
      </S.NavLink>
    </div>
  </S.Wrap>
);
