import React from 'react'
import styled from 'styled-components'
import Order from './order'

import orderEx from '../data/orders/order'


const Root = styled.div`

`

const Header = styled.div`
  padding: 0.5rem;
`

let orders = [orderEx, orderEx, orderEx]

export default() => {
  let ordersRen = orders.map(o => {
    return(
      <Order order={o}></Order>
    )
  })
  return <Root>
    <Header><h1>Orders</h1></Header>
    {ordersRen}
  </Root>
}
