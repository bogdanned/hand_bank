import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Root = styled.div`
  width: 100%;
`
const Payment = styled.div`
  padding: 10px;
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  border: 1px grey solid;
  > p,h4 {
    width: 25%;
    display: flex;
    justify-content: left;
}
`

const C = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`

export default() => {
  return <Root>
    <Header title={"Suppliers Payments"} />
    <C>
      <Payment>
        <h4>Nummer</h4>
        <h4>Supplier</h4>
        <h4>Status</h4>
        <h4>Ammount</h4>
      </Payment>
      <Payment>
        <p>65721834687</p>
        <p>Rocca</p>
        <p>Pending</p>
        <p>6700,8</p>
      </Payment>
      <Payment>
        <p>123213687</p>
        <p>Rocca</p>
        <p>Accepted</p>
        <p>6700,8</p>
      </Payment>
      <Payment>
        <p>657123687</p>
        <p>Vissman</p>
        <p>Rejected</p>
        <p>6700,8</p>
      </Payment>

    </C>
  </Root>
}
