import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'
var FontAwesome = require('react-fontawesome');

import "../styles.css"
import Test from './test'
import Dashboard from './Dashboard'
import data from '../data/offer'
import OrderList from './orderList'
import Order from './order/index.js'
import Suppliers from './Suppliers'
import Transactions from './Transactions'
import Forecasting from './Forecasting'

import FlowPage from './flowPage'
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

const GreenSave = styled.div`
  color: #2ecc71;
  border-color: #2ecc71;
`


const NewOffer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;

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
  color: white;
  font-size: 70px;
  font-weight: 700;
  border-bottom: 2px solid rgba(255,255,255, 0.7);
  p {
    height: 62px;
font-size: 27px;
color: white;
font-weight: 700;
  }
`

export default (props) => {
  let locations = window.location.href.split('/')
  console.log()
  let noSide = locations[locations.length - 1] !== "flow"
  return <Root>
    {noSide &&
    <Sidebar>
      <Menu>
        <Logo><p>Hand-Werks</p></Logo>
        <MenuItem to='/'>
          <Label active={locations[locations.length - 1] == "" ? true : false}>Dashboard</Label>
        </MenuItem>
        <MenuItem to='/offers'>
          <Label active={locations[locations.length - 1] == "offers" ? true : false}>Offers</Label>
        </MenuItem>
        <MenuItem to='/suppliers'>
          <Label active={locations[locations.length - 1] == "suppliers" ? true : false}>Suppliers Payments</Label>
        </MenuItem>
        <MenuItem to='/assistance'>
          <Label active={locations[locations.length - 1] == "transactions" ? true : false}>Assistance</Label>
        </MenuItem>
      </Menu>
      <Footer>
        <p>Bad Mueller Berlin</p>
      </Footer>
    </Sidebar>}
    <Content>
      <Route path="/forecasting" component={Forecasting} />
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/offers" component={OrderList}/>
      <Route path="/offers/:id" component={Order}/>
      <Route path="/suppliers" component={Suppliers}/>
      <Route path="/flow" component={FlowPage}/>
      <Route path="/test" component={Test}/>
      <Route path="/assistance" component={Transactions}/>
    </Content>
  </Root>
}
