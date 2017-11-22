import React from 'react'
import styled from 'styled-components'
import data from '../data/offer'

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
        <p>Cashflowd ssPredssssicdddtisson</p>
      </MenuItem>
      <MenuItem>
        <p>Cashflowasdasd Pasdasdasdredaasdasdsdasdicddtion</p>
      </MenuItem>
      <MenuItem>
        <p>Cashflow cash</p>
      </MenuItem>
    </Sidebar>
    <Content>
      <h1></h1>
    </Content>
  </Root>
)
