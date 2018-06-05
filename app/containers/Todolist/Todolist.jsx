import React from 'react';
import styled from 'styled-components';

/** color config */
import { BLUE, WHITE, MAZARINE } from './config';

const TabContainer = styled.div`
  background-color: ${BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabItem = styled.div`
  cursor: pointer;
  font-family: ${({ active }) => active ? 'Roboto-Medium' : 'Roboto-Regular'};
  color: ${({ active }) => active ? WHITE : MAZARINE};
  border-bottom: 5px solid;
  border-bottom-color: ${({ active }) => active ? MAZARINE : BLUE};
  font-size: 24px;
  width: 220px;
  height: 76px;
  line-height: 76px;
  text-align: center;
`;

const TABS = [
  {
    name: 'My Tasks',
    key: 'task'
  },
  {
    name: 'In Progress',
    key: 'progress'
  },
  {
    name: 'Completed',
    key: 'completed'
  }
];

const Todolist = () => {
  return (
    <div>
      <TabContainer>
        {TABS.map(tab => (
          <TabItem key={tab.key} active={tab.key === 'task'}>{tab.name}</TabItem>
        ))}
      </TabContainer>
    </div>
  );
};

export default Todolist;
