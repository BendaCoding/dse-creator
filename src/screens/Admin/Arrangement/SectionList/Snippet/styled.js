import styled from 'styled-components';

export const Wrap = styled.div`
  div:first-child:not(.isDragging) {
    .segment {
      border-top: none;
    }
  }
`;

export const Link = styled.span`
  cursor: pointer;
  transition: 190ms color ease-in;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
