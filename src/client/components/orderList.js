import React from 'react'
import {Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import orderList from '../data/orders/orderList'
import styled from 'styled-components'


import Header from './Header'

const Root = styled.div `
  width: 100%;
`

const OrderItem = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: blue 1px solid;
  padding: 20px;
  margin: 10px;
  &:hover{
    background-color: blue;
    color: white;
}
`

const OrderLink = ({order}) => {
  return (
    <Link to={`/offers/${order.id}`}>
      <OrderItem>
        <p>Order: {order.id}</p>
        <p>Date: {order.date.toString()}</p>
        <p>Amount: {order.id}</p>
      </OrderItem>
    </Link>
  )
}

export default() => {
  let items = orderList.map(o => {
    return (<OrderLink order={o}/>)
  })
  return (
    <Root>
      <Header title={"Orders"} />
      {items}
    </Root>
  )
}
