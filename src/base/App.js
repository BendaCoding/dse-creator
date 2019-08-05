import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import * as S from './styled';
import { Header } from './Header';
import { Home, CreateDse, Admin } from '../screens';

import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  useEffect(() => {
    window.ipc.send('REQUEST_DATA');
    window.ipc.on('HYDRATE_APP', (event, data) => {
      console.log(event, data);
    });
  });

  return (
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
};
