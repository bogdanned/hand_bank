import React from 'react'
import styled from 'styled-components'
import data from '../data/offer'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'
import Dashboard from './Dashboard'

const Root = styled.div`
  display: absolute;
  top: 0px;
  left: 0px;
  heihgt: 100%;
  background-color: ${props => props.theme.brandColor};

`
const Sidebar = styled.div`
  width: 300px;
<<<<<<< HEAD
  padding: 5rem 1rem 1rem 1rem;
=======
  height: 100vh;
  background-color: ${props => props.theme.brandColor};
>>>>>>> 077a33de6335a0db050030d7c95434be4ddc8679
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
<<<<<<< HEAD
      <MenuItem>
        <p>Cashflow Prediction</p>
      </MenuItem>
      <MenuItem>
        <p>Margin Calculation</p>
      </MenuItem>
      <MenuItem>
        <p>Supplier Scoring</p>
      </MenuItem>
=======
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
>>>>>>> 077a33de6335a0db050030d7c95434be4ddc8679
    </Sidebar>
    <Content>
      <Route path="/home" component={Dashboard}/>
    </Content>
  </Root>
)
