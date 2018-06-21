import React from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import Icon from 'react-fontawesome';

import Counter from './Counter';

class HOME extends React.Component {
  render() {
    const { state, action } = this.props;

    const revenueTotalCount = _get(state, 'data.revenue.total', 0);
    const costTotalCount = _get(state, 'data.cost.total', 0);
    const incomeTotalCount = _get(state, 'data.income.total', 0);

    return (
      <Container>
        <Row>
          <Col>
            <Counter
              green
              count={revenueTotalCount}
              label={<span><Icon name="rocket" />TOTAL REVENUE</span>}
            />
          </Col>
          <Col>
            <Counter
              red
              count={costTotalCount}
              label={<span><Icon name="cubes" />TOTAL COST</span>}
            />
          </Col>
          <Col>
            <Counter
              blue
              count={incomeTotalCount}
              label={<span><Icon name="money" />NET INCOME</span>}
            />
          </Col>
        </Row>
        <Row>
          <Col>Activity</Col>
        </Row>
        <Row>
          <Col>Transaction Website</Col>
          <Col>Latest Orders</Col>
        </Row>
      </Container>
    );
  }
}

export default HOME;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1 1 100%;
  padding: 30px 40px;
  margin: 0 10px 18px;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px 5px #EBEBEB;
  border-radius: 3px;
`;
