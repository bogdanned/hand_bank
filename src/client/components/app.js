import React from 'react'
import styled from 'styled-components'
import data from '../data/offer'
import {Button} from 'semantic-ui-react'
import {Route,Link} from 'react-router-dom'

const Root = styled.div`
  display: flex;
`
const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: ${props => props.theme.brandColor};
`

const Content = styled.div`
  width: 100%;
`

const Menu = styled.div`

`

const MenuItem = styled.div`
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.primaryColor};
  }
`

export default () => (
  <Root>
    <Sidebar>
      <Menu>
        <MenuItem>
          <Link to='/home'><p>Home</p></Link>
        </MenuItem>
        <MenuItem>
          <Link to='/orders'><p>Orders</p></Link>
        </MenuItem>
        <MenuItem>
          <Link to='/suppliers'><p></p></Link>
        </MenuItem>
      </Menu>
    </Sidebar>
    <Content>
      <Route path="/home" component={Dashboard}/>
    </Content>
  </Root>
)
