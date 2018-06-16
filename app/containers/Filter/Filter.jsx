import React, { Component } from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import Header from './components/Header';
import Card from './components/Card';
import Panel from './components/Panel';
import Loader from './components/Loader';
import { LIGHT_GRAY } from './config';

const handleFiles = (fileText) => {
  const spliter = 'http://';
  const result = fileText.split(spliter).slice(1).map(file => `${spliter}${file}`);
  return result;
}

class Filter extends Component {
  componentDidMount() {
    this.props.action.fetchData({
      limit: 100
    });
  }
  render() {
    const { state } = this.props;
    const records = _get(state, 'data.records', []);
    const { isFetch } = state;
    return (
      <FilterContainer>
        <Header />
        <Content>
          <LeftRow>
            <Panel />
          </LeftRow>
          <RightRow>
            {isFetch ? <Loader style={{ marginTop: '200px' }}/> : records.map(record => (
              <Card
                key={record._id}
                title={record.stitle}
                desc={record.xbody}
                cover={handleFiles(record.file)[0]}
                source={record.idpt}
                category={record.CAT2}
                address={record.address}
                postDate={record.xpostDate}
              />
            ))}
          </RightRow>
        </Content>
      </FilterContainer>
    );
  }
}

export default Filter;

const FilterContainer = styled.div`
  background-color: ${LIGHT_GRAY};
  padding-top: 100px;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  padding: 0 40px;
`;

const LeftRow = styled.div`
  flex: 0 0 300px;
  position: relative;
`;

const RightRow = styled.div`
  flex: 1 1 100%;
  padding-left: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
