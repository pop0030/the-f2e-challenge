import React from 'react';
import styled from 'styled-components';
import { BLUE, WHITE, MAZARINE } from './config';

const TabContainer = styled.div`
  background-color: ${BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
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

const Tab = ({ activeTab, toggleTab }) => (
  <TabContainer>
    {TABS.map(tab => (
      <TabItem
        key={tab.key}
        active={tab.key === activeTab}
        onClick={event => {
          toggleTab(tab.key)
        }}
      >
        {tab.name}
      </TabItem>
    ))}
  </TabContainer>
);

export default Tab;

