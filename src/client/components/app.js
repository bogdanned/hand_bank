import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'

const Root = styled.div`
  display: absolute;
  top: 0px;
  left: 0px;
  heihgt: 100%;
  background-color: ${props => props.theme.brandColor};

`
const Sidebar = styled.div`
  width: 300px;
  padding: 5rem 1rem 1rem 1rem;
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
    <Sidebar>
      <MenuItem>
        <p>Cashflow Prediction</p>
      </MenuItem>
      <MenuItem>
        <p>Margin Calculation</p>
      </MenuItem>
      <MenuItem>
        <p>Supplier Scoring</p>
      </MenuItem>
    </Sidebar>
    <Content>
      <Button onClick={() => (console.log("hellos"))}>test</Button>
    </Content>
  </Root>
)
