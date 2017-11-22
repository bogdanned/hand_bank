import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  padding: 0.5rem;
  height: 60px;
`

export default({title}) => (
  <Root>
    <h1>{title}</h1>
  </Root>
)
