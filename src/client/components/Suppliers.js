import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Root = styled.div`

`
const Payment = styled.div`
  padding: 4px;
  font-size: 16px;
`

export default() => {
  return <Root>
    <Header title={"Suppliers Payments"} />
    <div>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>
      <Payment>Payment 1</Payment>

    </div>
  </Root>
}
