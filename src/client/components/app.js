import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  padding: 3rem;
`
const Sidebar = styled.div`
  width: 200px;
  height: 100 vh;
`

export default () => (
  <Root>
    <h1>Welcome to Handworks!</h1>
    <Sidebar></Sidebar>
  </Root>
)
