import React, { Component } from 'react';
import Header from './container/Header';

class Filter extends Component {
  componentDidMount() {
    this.props.action.fetchData({ limit: 10 });
  }
  render() {
    return (
      <div>
        <Header />
        <pre>
          {JSON.stringify(this.props.state.data, null, '\t')}
        </pre>
      </div>
    );
  }
}

export default Filter;
