import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';

import { theme } from './theme';
import * as S from './styled';
import { Header } from './Header';
import { CreateDse, Admin } from '../screens';
import { store } from '../store';
import { IPC_EVENTS } from '../../constants';
// import 'semantic-ui-css/semantic.min.css';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  /* Hydrate Store from storage */
  useEffect(() => {
    ipcRenderer.send(IPC_EVENTS.REQUEST_STATE);
    ipcRenderer.on(IPC_EVENTS.HYDRATE_STATE, (event, payload) => {
      console.log('Received Store data');
      store.dispatch({ type: 'HYDRATE_STORE', payload });
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    'Loading...'
  ) : (
    <div>Im the app</div>
    // <ThemeProvider theme={theme}>
    //   <BrowserRouter>
    //     <Provider store={store}>
    //       <S.BodyWrap>
    //         <S.GlobalStyle />
    //         <Header>DSE Creator</Header>
    //         <S.Content>
    //           <Switch>
    //             <Route path="/create" component={CreateDse} />
    //             <Route path="/admin/:section?" component={Admin} />
    //             <Redirect to="/create" />
    //           </Switch>
    //         </S.Content>
    //       </S.BodyWrap>
    //     </Provider>
    //   </BrowserRouter>
    // </ThemeProvider>
  );
};
