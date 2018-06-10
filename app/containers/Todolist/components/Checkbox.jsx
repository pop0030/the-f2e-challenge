import React from 'react';
import styled from 'styled-components';
import { Square, CheckSquare } from 'react-feather';

const Checkbox = ({ checked, onClick }) => (
  <StyledCheckbox
    onClick={onClick}
  >
    {checked
      ? <CheckSquare />
      : <Square />
    }
  </StyledCheckbox>
);

export default Checkbox;

const StyledCheckbox = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: 16px;
`;
