import React from 'react';
import styled from 'styled-components';
import _size from 'lodash/size';
import { MEDIUM_GRAY, NOMARL_GRAY } from './config';

import Tab from './Tab';
import AddButton from './AddButton';
import TodoItem from './TodoItem';

const renderList = (list, type) => list.filter(item => {
  if (type === 'progress') {
    return !item.isCompleted;
  }
  if (type === 'completed') {
    return item.isCompleted;
  }
  return true;
})

const Todolist = ({ state, action }) => {
  const { tab, list, isOpenAdd, activeItem } = state;
  const { toggleTab, toggleAdd, addItem, editItem, toggleEdit, toggleCompleted, toggleRemarkable } = action;
  const filterList = renderList(list, tab);
  return (
    <TodoListCaontainer>
      <Tab
        activeTab={tab}
        toggleTab={toggleTab}
      />
      <StyledListWrapper>
        <AddButton
          addItem={addItem}
          isOpenAdd={isOpenAdd}
          toggleAdd={toggleAdd}
          toggleComplete={toggleCompleted}
          toggleRemarkable={toggleRemarkable}
        />
        {filterList.map(item => (
          <TodoItem
            item={item}
            key={item.uid}
            active={activeItem === item.uid}
            editItem={editItem}
            toggleEdit={toggleEdit}
            toggleCompleted={toggleCompleted}
            toggleRemarkable={toggleRemarkable}
          />
        ))}
        {(tab === 'task' || tab === 'progress') &&
        <Info>{`${_size(filterList)} task(s) left`}</Info>
        }
        {(tab === 'completed') &&
        <Info>{`${_size(filterList)} task(s) completed`}</Info>
        }
      </StyledListWrapper>
    </TodoListCaontainer>
  );
};

export default Todolist;

const TodoListCaontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${MEDIUM_GRAY};
  flex-direction: column;
  overflow: hidden;
`;

const StyledListWrapper = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  > div {
    flex: 0 0 auto;
  }
`;

const Info = styled.div`
  width: 625px;
  padding: 0 32px;
  font-size: 24px;
  color: ${NOMARL_GRAY};
  font-style: italic;
`;
