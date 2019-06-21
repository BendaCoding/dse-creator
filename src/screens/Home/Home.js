import React, { Fragment } from 'react';
import * as S from './styled';
import { Button } from 'semantic-ui-react';

export const Home = () => (
  <S.Centered>
    <h1>Willkommen!</h1>
    <p>
      Lade deine bestehende Datenbank aus Text Bausteinen, oder erstelle jetzt
      eine neue{' '}
    </p>
    <Button primary>Datenbank öffnen</Button>
    <Button secondary>Datenbank erstellen</Button>
  </S.Centered>
);
