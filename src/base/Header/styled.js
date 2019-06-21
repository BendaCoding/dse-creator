import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.layout.headerBg};
`;

export const Header = styled.h1`
  text-align: center;
  line-height: 90px;
  color: '#ffffff';
`;
