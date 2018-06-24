import React from 'react';
import styled from 'styled-components';

const Counter = ({ label, labelIcon, count, countColor }) => (
  <div>
    <Label>
      {labelIcon}
      {label}
    </Label>
    <Count color={countColor}>{count}</Count>
  </div>
);

export default Counter;

const Label = styled.div`
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  margin-bottom: 16px;
  > .fa {
    margin-right: 8px;
    font-size: 25px;
    vertical-align: middle;
  }
`;

const Count = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Helvetica', sans-serif;
  color: ${({ color }) => color || '#000000'};
`;
