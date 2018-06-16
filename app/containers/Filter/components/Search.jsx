import React from 'react';
import styled from 'styled-components';
import { WHITE } from '../config';
import Icon from 'react-fontawesome';


const Search = (props) => (
  <SearchWrapper>
    <Input
      placeholder="Explore your own attractions"
      {...props}
    />
    <Icon name="search" />
  </SearchWrapper>
);

export default Search;

const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  font-weight: 200;
  vertical-align: middle;
  .fa {
    color: ${WHITE};
    position: absolute;
    left: 0px;
    top: 0px;
  }
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${WHITE};
  width: 388px;
  padding: 0px 0 5px 40px;
  color: ${WHITE};
  font-size: 20px;
  &::placeholder {
    font-style: italic;
    color: ${WHITE};
    opacity: 0.5;
  }
`;
