import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'

import Test from './test'
import Dashboard from './Dashboard'
import Flow from './flow'
import data from '../data/offer'

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
  padding: 1rem 1rem 1rem 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  color: white;
  :hover {
    background-color: ${props => props.theme.primaryColor};
  };
  p {
    font-size: 1.6rem;
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
      <Route path="/flow" component={Flow}/>
    </Content>
    <Test></Test>
  </Root>
)
