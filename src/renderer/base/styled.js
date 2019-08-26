import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodyBg};
  }
  
  .rdw-dropdown-wrapper,
  .rdw-option-wrapper {
    border-color: ${({ theme }) => theme.forms.inputBorder};

    &:hover {
      box-shadow: none;
    }
  }

  .rdw-editor-toolbar {
    border-color: ${({ theme }) => theme.forms.inputBorder};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 10px 0;
  }

  .rdw-editor-main {
    margin: -7px 0 15px;
    padding: 0 10px 5px;
    border: 1px solid ${({ theme }) => theme.forms.inputBorder};
    border-top: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const BodyWrap = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.bodyBg};
`;

export const Content = styled.div`
  padding: 20px 15px;
`;

export const editorStyles = `

`;
