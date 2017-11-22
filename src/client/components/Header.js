import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  padding: 0.5rem;
`

export default({title}) => (
  <Root>
    <h1>{title}</h1>
  </Root>
)
