import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

const HEADER_HEIGHT = '70px';

export const Wrap = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.header.bg};
`;

export const Header = styled.h1`
  line-height: ${HEADER_HEIGHT};
  color: ${({ theme }) => theme.header.color};
  margin: 0;

  span {
    font-size: 12px;
  }
`;

export const NavLink = styled(BaseNavLink)`
  color: ${({ theme }) => theme.header.color};
  margin-left: 15px;
  transition: color 195ms ease-in;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.header.hoverColor};
  }

  label {
    margin-left: 3px;
  }
`;
