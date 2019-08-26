import styled from 'styled-components';

export const Wrap = styled.div`
  div:first-child:not(.isDragging) {
    .segment {
      border-top: none;
    }
  }
`;

export const Link = styled.div`
  cursor: pointer;
  transition: 190ms color ease-in;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const IconWrap = styled.div`
  margin: 1px 5px 0 0;
  color: ${({ theme }) => theme.forms.disabled};
`;
