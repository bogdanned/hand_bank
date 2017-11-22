import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: 60px;
  border-bottom: 2px solid grey;
  display: flex;
  align-items: center;
  width: 100%;
  `

export default({title}) => (
  <Root>
    <h1>{title}</h1>
  </Root>
)
