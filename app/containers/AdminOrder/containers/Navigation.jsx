import React from 'react';
import styled from 'styled-components';

const Navigation = ({ tab, onTabClick }) => (
  <NavContainer>
    <NavLogo>Shoptime</NavLogo>
    <TabContainer>
      <TabItem active={tab === 'home'} onClick={onTabClick('home')}>HOME</TabItem>
      <TabItem active={tab === 'orders'} onClick={onTabClick('orders')}>ORDERS</TabItem>
      <TabItem active={tab === 'product'} onClick={onTabClick('product')}>PRODUCT</TabItem>
    </TabContainer>
    <NavOption>Admin</NavOption>
  </NavContainer>
);

export default Navigation;

const NavContainer = styled.div`
  display: flex;
  background-color: #000;
  align-items: center;
  padding: 0 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const NavLogo = styled.div`
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #FFFFFF;
  flex: 0 0 auto;
  margin: 0 40px;
`;

const TabContainer = styled.ul`
  white-space: nowrap;
  flex: 1 1 100%;
  margin: 0 40px;
`;

const TabItem = styled.li`
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  display: inline-block;
  padding: 25px 0 21px 0;
  color: #FFFFFF;
  cursor: pointer;
  margin-right: 40px;
  border-style: solid;
  border-color: #FFFFFF;
  border-bottom-width: ${({ active }) => (active ? '4px' : '0px')}
`;

const NavOption = styled.div`
  flex: 0 0 auto;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  margin: 0 40px;
`;
