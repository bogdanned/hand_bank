import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding-left: 2rem;
  border-bottom: 2px solid grey;
  `

export default({title}) => (
  <Root>
    <h1>{title}</h1>
  </Root>
)
