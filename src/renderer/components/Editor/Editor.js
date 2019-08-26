import { Editor as BaseEditor } from 'react-draft-wysiwyg';
import styled from 'styled-components';

export const Editor = styled(BaseEditor)`
  .rdw-editor-main {
    background: red;
    font-size: 25px;
    display: none;
  }
`;
