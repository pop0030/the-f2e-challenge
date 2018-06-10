import React from 'react';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import FontAwesomeIcon from 'react-fontawesome';
import { Edit } from 'react-feather';
import { LIGHT_GRAY, DARK_GRAY, BLACK, BEIGE } from './config';
import EditPanel from './EditPanel';
import Checkbox from './components/Checkbox';
import Star from './components/Star';

const TodoItem = ({
  item,
  active,
  editItem,
  toggleEdit,
  toggleCompleted,
  toggleRemarkable
}) => {
  return active ? (
    <EditPanel
      type="edit"
      item={item}
      onSave={editItem}
      onCancel={() => {
        toggleEdit(item.uid, false);
      }}
    />
  ) : (
    <TodoItemContainer
      backgroud={item.isRemarkable ? BEIGE : LIGHT_GRAY}
    >
      <Row>
        <Col>
          <Checkbox
            checked={item.isCompleted}
            onClick={event => {
              toggleCompleted(item.uid, !item.isCompleted);
            }}
          />
          <Title
            line={item.isCompleted}
          >
            {item.title}
          </Title>
        </Col>
        <Col>
          <Star
            checked={item.isRemarkable}
            onClick={event => {
              toggleRemarkable(item.uid, !item.isRemarkable)
            }}
          />
          <Edit
            onClick={event => {
              toggleEdit(item.uid, true);
            }}
            style={{ marginLeft: '32px', cursor: 'pointer' }}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingLeft: '40px', color: DARK_GRAY }}>
          {(item.dlDate && item.dlTime) &&
          <Label>
            <FontAwesomeIcon name="calendar"  style={{ marginRight: '8px' }}/>
            {item.dlDate}
          </Label>
          }
          {!_isEmpty(item.files) &&
          <Label>
            <FontAwesomeIcon name="file-o" />
          </Label>
          }
          {item.comment &&
          <Label>
            <FontAwesomeIcon name="commenting-o" />
          </Label>
          }
        </Col>
      </Row>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  width: 620px;
  border-radius: 5px;
  margin-bottom: 16px;
  background: ${({ backgroud }) => backgroud};
  overflow: hidden;
  padding: 24px 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    flex: 1 1 100%;
    > * {
      vertical-align: middle;
    }
  }

  > div:nth-child(2) {
    flex: 0 0 auto;
    > * {
      vertical-align: middle;
    }
  }
`;

const Col = styled.div``;

const Label = styled.div`
  display: inline-block;
  margin: 16px 16px 0 0;
`;

const Title = styled.div`
  font-size: 24px;
  width: calc(100% - 40px);
  display: inline-block;
  text-decoration: ${({ line }) => line ? 'line-through' : 'none'};
  color: ${({ line }) => line ? DARK_GRAY : BLACK};
`;
