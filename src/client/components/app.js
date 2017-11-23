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

import Login from './Login'

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
  min-width: 220px;
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
  text-transform: none;
`

const Label = styled.p`
  cursor: pointer;
  color: white
  text-transform: uppercase;
  padding: 1rem 1rem 1rem 2rem;
  font-size: 1.6rem;
  background-color: ${props => props.active ? props.theme.primaryColor : "inherit"};
  :hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
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

export default (props) => {
  let locations = window.location.href.split('/')
  console.log()
  let noSide = locations[locations.length - 1] !== "login"
  return <Root>
    {noSide &&
    <Sidebar>
      <Menu>
        <Logo><img src="./images/logo.png" height="60" width="42"/></Logo>
        <MenuItem to='/flow'>
          <Label>New Offer</Label>
        </MenuItem>
        <MenuItem to='/'>
          <Label active={locations[locations.length - 1] == "" ? true : false}>Dashboard</Label>
        </MenuItem>
        <MenuItem to='/offers'>
          <Label active={locations[locations.length - 1] == "offers" ? true : false}>Offers</Label>
        </MenuItem>
        <MenuItem to='/suppliers'>
          <Label active={locations[locations.length - 1] == "suppliers" ? true : false}>Suppliers Payments</Label>
        </MenuItem>
        <MenuItem to='/transactions'>
          <Label active={locations[locations.length - 1] == "transactions" ? true : false}>Forecasting</Label>
        </MenuItem>
      </Menu>
      <Footer>
        <p>Bad Mueller Berlin</p>
      </Footer>
    </Sidebar>}
    <Content>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/offers" component={OrderList}/>
      <Route path="/offers/:id" component={Order}/>
      <Route path="/suppliers" component={Suppliers}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/flow" component={Flow}/>
      <Route path="/test" component={Test}/>
    </Content>
  </Root>
}
