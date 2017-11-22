import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'

import Test from './test'
import Dashboard from './Dashboard'
import Flow from './flow'
import data from '../data/offer'
import Orders from './Orders'
import Suppliers from './Suppliers'
import Transactions from './Transactions'

const Root = styled.div`
  display: absolute;
  top: 0px;
  left: 0px;
  heihgt: 100%;
  background-color: ${props => props.theme.brandColor};

`

const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${props => props.theme.brandColor};
`

const Content = styled.div`
  width: 100%;
`

const Menu = styled.div`
  margin-top: 8rem;
`

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
`

const Label = styled.p`
  cursor: pointer;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1.6rem;
  :hover {
    background-color: ${props => props.theme.primaryColor};
  };
`

export default () => (
  <Root>
    <Sidebar>
      <Menu>
        <MenuItem to='/home'>
          <p>Home</p>
        </MenuItem>
        <MenuItem to='/orders'>
          <p>Orders</p>
        </MenuItem>
        <MenuItem to='/suppliers'>
          <p>Suppliers</p>
        </MenuItem>
        <MenuItem to='/transactions'>
          <p>Transactions</p>
        </MenuItem>
      </Menu>
    </Sidebar>
    <Content>
      <Route path="/home" component={Dashboard}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/suppliers" component={Suppliers}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/flow" component={Flow}/>
      <Route path="/test" component={Test}/>
    </Content>
  </Root>
)
