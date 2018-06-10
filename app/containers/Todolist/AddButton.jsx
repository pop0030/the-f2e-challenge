import React from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';

import EditPanel from './EditPanel';
import { WHITE, NOMARL_GRAY } from './config';

const StyledButton = styled.div`
  cursor: pointer;
  width: 620px;
  height: 65px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: ${WHITE};
  border: 1px solid ${NOMARL_GRAY};

  color: ${NOMARL_GRAY};
  display: flex;
  align-items: center;
  padding: 0 32px;
  font-size: 24px;
`;

const AddButton = ({ isOpenAdd, addItem, toggleAdd }) => (
  <React.Fragment>
    {!isOpenAdd &&
    <StyledButton
      onClick={event => {
        toggleAdd(true);
      }}
    >
      <span style={{ marginRight: '12px' }}><Plus size={36} /></span>
      <span>Add Task</span>
    </StyledButton>
    }
    {isOpenAdd &&
    <EditPanel
      type="add"
      onSave={addItem}
      onCancel={() => {
        toggleAdd(false);
      }}
    />
    }
  </React.Fragment>
);

export default AddButton;
