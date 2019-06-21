import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  div {
    background: ${({ theme }) => theme.bodyBg};
  }
`;

export const BodyWrap = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.bodyBg};
`;

export const Content = styled.div`
  padding: 20px 15px;
`;
