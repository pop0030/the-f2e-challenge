import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from 'react-fontawesome';
import { BLACK, YELLOW } from '../config';

const Star = ({ checked, onClick }) => (
  <StyledIcon
    onClick={onClick}
    checked={checked}
  >
    {checked
      ? <FontAwesomeIcon name="star" />
      : <FontAwesomeIcon name="star-o" />
    }
  </StyledIcon>
);

export default Star;

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 32px;
  font-size: 24px;
  color: ${({ checked }) => checked ? YELLOW : BLACK};
`;
