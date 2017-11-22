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
  padding: 5rem 1rem 1rem 1rem;
  height: 100 vh;
`

const Content = styled.div`
  width: 100%;
`

const MenuItem = styled.div`
  padding: 0.5rem;
  background-color: ${props => props.theme.brandColor};
  color: white;
  cursor: pointer;
`

export default () => (
  <Root>
    <h1>test</h1>
    {JSON.stringify(data)}
    <Sidebar>
      <MenuItem>
      </MenuItem>
      <MenuItem>
        <p>Cashflowasdasd Pasdasdasdredaasdasdsdasdicddtion</p>
      </MenuItem>
      <MenuItem>
        <p>Cashflow cash</p>
      </MenuItem>
    </Sidebar>
    <Content>
      <Button onClick={() => (console.log("hellos"))}>test</Button>
    </Content>
  </Root>
)
