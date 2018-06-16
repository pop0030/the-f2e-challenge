import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';
import { WHITE, VIOLET } from '../config';

const Checkbox = ({ checked, onClick, ...props }) => (
  <StyledCheckbox
    onClick={onClick}
    {...props}
  >
    <Icon
      name={checked ? 'check-square' : 'square'}
      style={{ color: checked ? VIOLET : WHITE }}
    />
  </StyledCheckbox>
);

export default Checkbox;

const StyledCheckbox = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-right: 16px;
  font-size: 16px;
  border-radius: 2px;
`;
