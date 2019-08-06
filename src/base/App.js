import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { theme } from './theme';
import * as S from './styled';
import { Header } from './Header';
import { Home, CreateDse, Admin } from '../screens';
import { store } from '../store';

import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  /* Hydrate Store from storage */
  useEffect(() => {
    window.ipc.send('REQUEST_DATA');
    window.ipc.on('HYDRATE_APP', (event, payload) => {
      setIsLoading(false);
      store.dispatch({ type: 'HYDRATE_STORE', payload });
    });
  }, []);

  return isLoading ? (
    'Loading...'
  ) : (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
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
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
