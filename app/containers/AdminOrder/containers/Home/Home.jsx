import React from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import Icon from 'react-fontawesome';

import Counter from './Counter';
import ActivityChart from './ActivityChart';
import TransactionSite from './TransactionSite';

class HOME extends React.Component {
  render() {
    const { state } = this.props;

    const revenueTotalCount = _get(state, 'data.revenue.total', 0);
    const costTotalCount = _get(state, 'data.cost.total', 0);
    const incomeTotalCount = _get(state, 'data.income.total', 0);

    return (
      <Container>
        <Row>
          <Col>
            <Counter
              count={revenueTotalCount}
              countColor="#7ED321"
              label="TOTAL REVENUE"
              labelIcon={<Icon name="rocket" />}
            />
          </Col>
          <Col>
            <Counter
              count={costTotalCount}
              countColor="#D0021B"
              label="TOTAL COST"
              labelIcon={<Icon name="cubes" />}
            />
          </Col>
          <Col>
            <Counter
              count={incomeTotalCount}
              countColor="#4A90E2"
              label="NET INCOME"
              labelIcon={<Icon name="money" />}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ActivityChart />
          </Col>
        </Row>
        <Row>
          <Col>
            <TransactionSite />
          </Col>
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
  background-color: #F2F2F2;
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
