import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _find from 'lodash/find';
import * as actions from '../action';
import Checkbox from './Checkbox';
import { MEDIUM_GRAY, NOMARL_GRAY, TPE_LOCATION, CAT_OPTIONS } from '../config';

const Panel = ({ state, action }) => {
  const locationValue = _find(TPE_LOCATION, opt => (opt.value === state.query.location));
  const categorys = CAT_OPTIONS.map(opt => ({ ...opt, checked: state.query.category.includes(opt.value)}))
  return (
    <PanelContainer>
      <Section border>
        <Title>Location</Title>
        <Select
          name="location"
          defaultValue={TPE_LOCATION[0]}
          value={locationValue}
          options={TPE_LOCATION}
          onChange={action.changeLocation}
        />
      </Section>
      <Section>
        {categorys.map(cat => (
          <OptionRow key={cat.value}>
            <Checkbox
              checked={cat.checked}
              onClick={() => {
                action.changeCategory({ ...cat });
              }}
            />
            <span>{cat.label}</span>
          </OptionRow>
        ))}
      </Section>
    </PanelContainer>
  );
};

export default connect(
  state => ({
    state: state.filter
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(Panel);

const PanelContainer = styled.div`
  background-color: ${MEDIUM_GRAY};
  position: fixed;
  top: 100px;
  width: 300px;
`

const Section = styled.div`
  padding: 24px 40px;
  border-bottom-style: solid;
  border-bottom-color: ${NOMARL_GRAY};
  border-bottom-width: ${({ border }) => (border ? '1px' : 0)};
`;

const Title = styled.h5`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const OptionRow = styled.div`
  margin-bottom: 12px;
`;
