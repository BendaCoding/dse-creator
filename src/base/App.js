import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import * as S from './styled';
import { Header } from './Header';
import { NewDse } from '../screens';

import 'semantic-ui-css/semantic.min.css';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <S.BodyWrap>
        <S.GlobalStyle />
        <Header>DSE Creator</Header>
        <S.Content>
          <Switch>
            <Route exact path="/" component={NewDse} />
          </Switch>
        </S.Content>
      </S.BodyWrap>
    </BrowserRouter>
  </ThemeProvider>
);
