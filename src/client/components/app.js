import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'

import Test from './test'
import Dashboard from './Dashboard'
import Flow from './flow'
import data from '../data/offer'
import OrderList from './orderList'
import Order from './order/index.js'
import Suppliers from './Suppliers'
import Transactions from './Transactions'


const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const Footer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  font-size: 1.2rem;
  color: white;
  border-top: 1px solid white;
`

const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${props => props.theme.brandColor};
`

const Content = styled.div`
  width: 100%;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
`

const Label = styled.p`
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem 1rem 1rem 2rem;
  font-size: 1.6rem;
  :hover {
    background-color: ${props => props.theme.primaryColor};
  };
`

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  border-bottom: 2px solid rgba(255,255,255, 0.7);
`

export default () => (
  <Root>
    <Sidebar>
      <Menu>
        <Logo><img src="logo.png" height="60" width="42"/></Logo>
        <MenuItem to='/'>
          <Label>Dashboard</Label>
        </MenuItem>
        <MenuItem to='/orders'>
          <Label>Orders</Label>
        </MenuItem>
        <MenuItem to='/suppliers'>
          <Label>Suppliers</Label>
        </MenuItem>
        <MenuItem to='/transactions'>
          <Label>Transactions</Label>
        </MenuItem>
        <MenuItem to='/flow'>
          <Label>Create Order</Label>
        </MenuItem>
      </Menu>
      <Footer>
        <p>Bad Mueler Berlin</p>
      </Footer>
    </Sidebar>
    <Content>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/orders" component={OrderList}/>
      <Route path="/orders/:id" component={Order}/>
      <Route path="/suppliers" component={Suppliers}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/flow" component={Flow}/>
      <Route path="/test" component={Test}/>
    </Content>
  </Root>
)
