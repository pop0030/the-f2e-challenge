import React, { Component } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import FontAwesomeIcon from 'react-fontawesome';
import { Edit, X, Plus } from 'react-feather';
import { LIGHT_GRAY, NOMARL_GRAY, BLUE, RED, WHITE, BLACK, BEIGE } from './config';
import Checkbox from './components/Checkbox';
import Star from './components/Star';

const defaultState = {
  uid: null,
  title: '',
  dlDate: '',
  dlTime: '',
  files: [],
  comment: '',
  isCompleted: false,
  isRemarkable: false
};

class EditPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState,
      ...this.props.item || {},
    }
  }

  componentDidMount() {
    if (this.props.type === 'add') {
      this.setState({ uid: uuid.v4() })
      this.TitleInput && this.TitleInput.focus();
    }
  }

  handle = {
    onTitleChange: event => {
      const value = event.target.value;
      this.setState({ title: value });
    },
    onDateChange: event => {
      const value = event.target.value;
      const re = /[0-9/]*/;
      this.setState({ dlDate: re.exec(value)[0] });
    },
    onTimeChange: event => {
      const value = event.target.value;
      const re = /[0-9:]*/;
      this.setState({ dlTime: re.exec(value)[0] });
    },
    onCommentChange: event => {
      const value = event.target.value;
      this.setState({ comment: value });
    },
    onSave: event => {
      const { onSave } = this.props;
      onSave(this.state);
    },
    onCheckbox: event => {
      const { isCompleted } = this.state;
      this.setState({ isCompleted: !isCompleted });
    },
    onRemark: event => {
      const { isRemarkable } = this.state;
      this.setState({ isRemarkable: !isRemarkable });
    }
  }
  render() {
    const { title, dlDate, dlTime, comment, isCompleted, isRemarkable } = this.state;
    const { onTitleChange, onSave, onDateChange, onTimeChange, onCommentChange, onCheckbox, onRemark } = this.handle;
    const { onCancel, type } = this.props;
    const isValid = (title && title !== '');
    return (
      <EditContainer>
        <Header
          background={isRemarkable ? BEIGE : LIGHT_GRAY}
        >
          <div>
            <Checkbox
              checked={isCompleted}
              onClick={onCheckbox}
            />
            <TitleInput
              value={title}
              onChange={onTitleChange}
              placeholder="Type Something Here..."
              innerRef={node => {
                this.TitleInput = node;
              }}
            />
          </div>
          <div>
            <Star
              checked={isRemarkable}
              onClick={onRemark}
            />
            <Edit style={{ marginLeft: '32px' }} />
          </div>
        </Header>
        <Content>
          <Section>
            <div className="sec-header">
              <FontAwesomeIcon name="calendar" />
              Deadline
            </div>
            <div className="sec-body">
              <Input
                type="text"
                value={dlDate}
                onChange={onDateChange}
                placeholder="yyyy/mm/dd"
                style={{ marginRight: '8px' }}
              />
              <Input
                type="text"
                value={dlTime}
                onChange={onTimeChange}
                placeholder="hh:mm"
              />
            </div>
          </Section>
          <Section>
            <div className="sec-header">
              <FontAwesomeIcon name="file-o" />
              Files
            </div>
            <div className="sec-body">
              <FileUploadButton>
                <Plus />
              </FileUploadButton>
            </div>
          </Section>
          <Section>
            <div className="sec-header">
              <FontAwesomeIcon name="commenting-o" />
              Comment
            </div>
            <div className="sec-body">
              <TextArea
                value={comment}
                onChange={onCommentChange}
                placeholder="Type your memo here..."
              />
            </div>
          </Section>
        </Content>
        <ButtonGroup>
          <Button
            type="cancel"
            onClick={onCancel}
          >
            <X style={{ marginRight: '16px' }} />
            Cancel
          </Button>
          <Button
            type="add"
            onClick={onSave}
            disabled={!isValid}
          >
            <Plus style={{ marginRight: '16px' }} />
            {type === 'add' && 'Add Task'}
            {type === 'edit' && 'Save'}
          </Button>
        </ButtonGroup>
      </EditContainer>
    )
  }
}

export default EditPanel;

const EditContainer = styled.div`
  width: 620px;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: ${LIGHT_GRAY};
  box-shadow: 0 4px 4px 0 ${NOMARL_GRAY};
  overflow: hidden;
`;

const Header = styled.div`
  padding: 24px 32px;
  border-bottom: 2px solid ${NOMARL_GRAY};
  display: flex;
  justify-content: space-between;
  background: ${({ background }) => background};

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

const Content = styled.div`
  padding: 24px 72px;
`;

const Section = styled.div`
  margin-bottom: 16px;
  > .sec-header {
    margin-bottom: 8px;
    font-weight: bold;
    > span.fa {
      margin-right: 9px;
    }
  }
  > .sec-body {
    padding-left: 24px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  > button {
    flex: 1 1 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  border: 0;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ type }) => {
    if (type === 'add') {
      return BLUE;
    }
    if (type === 'cancel') {
      return WHITE;
    }
    return WHITE;
  }};
  color: ${({ type }) => {
    if (type === 'add') {
      return WHITE;
    }
    if (type === 'cancel') {
      return RED;
    }
    return BLACK;
  }};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const TitleInput = styled.input`
  border: 0;
  outline: 0;
  font-size: 24px;
  padding: 0;
  background: transparent;
  width: calc(100% - 40px);
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 0;
  background: ${WHITE};
  border-radius: 2px;
  padding: 8px 16px;
  font-size: 16px;
  width: 162px;
`;

const TextArea = styled.textarea`
  border: 0;
  outline: 0;
  padding: 0;
  background: ${WHITE};
  border-radius: 2px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
  height: 120px;
  resize: none;
  overflow-x: none;
  overflow-y: auto;
`;

const FileUploadButton = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${NOMARL_GRAY};
  color: ${WHITE};
  &:hover {
    background-color: ${BLUE};
  }
`;
