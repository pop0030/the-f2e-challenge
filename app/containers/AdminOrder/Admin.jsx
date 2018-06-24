import React from 'react';
import styled from 'styled-components';
import Navigation from './containers/Navigation';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Product from './containers/Product';

class Admin extends React.Component {
  handles = {
    onTabClick: tab => event => {
      this.props.action.toggleTab({ tab });
    }
  }
  render() {
    const { tab } = this.props.state;
    return (
      <Container>
        <Navigation tab={tab} onTabClick={this.handles.onTabClick} />
        {(tab === 'home') && <Home {...this.props} />}
        {(tab === 'orders') && <Orders />}
        {(tab === 'product') && <Product />}
      </Container>
    );
  }
}

export default Admin;

const Container = styled.div`
  background-color: #F2F2F2;
  height: 100vh;
  padding-top: 70px;
  font-family: 'Helvetica', sans-serif;
`;
