import React from 'react'
import styled from 'styled-components'
import data from '../data/offer'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Suppliers from './Suppliers'
import Transactions from './Transactions'

const Root = styled.div`
  display: flex;
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

export default () => {
  return  <Root>
      <Sidebar>
        <Menu>
          <MenuItem to='/home'>
            <Label>Home</Label>
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
        </Menu>
      </Sidebar>
      <Content>
        <Route path="/home" component={Dashboard}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/suppliers" component={Suppliers}/>
        <Route path="transactions" component={Transactions} />
      </Content>
    </Root>
}
