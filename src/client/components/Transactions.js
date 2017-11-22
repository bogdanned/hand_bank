import React from 'react'
import styled from 'styled-components'

const Root = styled.div`

`

const Header = styled.div`
  padding: 0.5rem;
`

export default() => {
  return <Root>
    <Header><h1>Transactions</h1></Header>
  </Root>
}
