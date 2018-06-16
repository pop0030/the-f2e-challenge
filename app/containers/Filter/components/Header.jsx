import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import Search from './Search';

import { VIOLET } from '../config';

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <Search />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: ${VIOLET};
  padding: 24px 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 150px;
  margin-right: 150px;
  vertical-align: middle;
`;

