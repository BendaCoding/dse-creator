import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import * as S from './styled';
import { Header } from './Header';
import { Home, CreateDse, Admin } from '../screens';

import 'semantic-ui-css/semantic.min.css';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <S.BodyWrap>
        <S.GlobalStyle />
        <Header>DSE Creator</Header>
        <S.Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateDse} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </S.Content>
      </S.BodyWrap>
    </BrowserRouter>
  </ThemeProvider>
);
