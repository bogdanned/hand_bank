import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'


export const Button = styled.button`
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-left: 10px;
  font-weight: 400;
  margin-right: 10px;
  background-color: white;
  color: #2ecc71;
  border-color: #2ecc71;
  border-radius: 0px;
  cursor: pointer;
  &:hover{
    background-color: #2ecc71;
    color: white;
  }
  &:focus{
    outline: none;
  }
`

export default ({onClick}) => (
  <Button onClick={onClick}>BACK</Button>
)
