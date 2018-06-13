import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

import { VIOLET, WHITE } from '../config';

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
`;

const Logo = styled.img`
  cursor: pointer;
  width: 157px;
`;

const Search = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${WHITE};
  width: 150px;
  padding: 5px 40px 5px 0;
  &::before {
    content: '\f002';
    font-family: FontAwesome;
  }
`;
