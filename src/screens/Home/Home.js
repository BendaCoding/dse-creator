import React from 'react';
import * as S from './styled';
import { Button } from 'semantic-ui-react';

export const Home = () => {
  const openFile = () => window.ipc.send('select-file');

  return (
    <S.Centered>
      <h1>Willkommen!</h1>
      <p>
        Lade deine bestehende Datenbank aus Text Bausteinen, oder erstelle jetzt
        eine neue{' '}
      </p>
      <Button primary onClick={openFile}>
        Datenbank öffnen
      </Button>
      <Button secondary>Datenbank erstellen</Button>
    </S.Centered>
  );
};
