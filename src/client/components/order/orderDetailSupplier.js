import React from 'react'
import styled from 'styled-components'
import groupByManufacturer from '../../controllers/groupByManufacturer'


const Root = styled.div`

`

const Header = styled.div`
  padding: 0.5rem;
`

const ProdRoot = styled.div`
  display: flex;
  justify-content: space-between;
`

const ServiceRoot = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: black 1px solid;
  width: 100%;
  padding: 10px;
  border-radius: 0px;
  margin: 5px;
`


const Product = ({product: {name, price, manufacturer}}) => (
  <ProdRoot>
    <h6>{`${name}`}</h6>
    <h6>{`Price: ${price}`}</h6>
  </ProdRoot>
)

const Products = ({products}) => {
  let prodRend = products.map(p => (<Product product={p}/>))
  let cost = products.reduce((a, b) => {
    return a + parseInt(b.price)
  }, 0)
  return (
    <div>
      {prodRend}
      <div>Total Cost: {cost}</div>
    </div>
  )
}

const Manufacturer = ({products, prodName}) => {
  return(
    <ServiceRoot>
      <h3>{`${prodName}`}</h3>
      {products && <Products products={products}/>}
    </ServiceRoot>
  )
}

const PlaceOrderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const PlaceOrder = styled.button`
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
  padding: 5px;
  font-size: 14px;
  border-radius: 0px;
`

export default class OrdersMan extends React.Component{
  render(){
    let producers = groupByManufacturer(this.props.order)
    let rendMan = Object.keys(producers).map(key => {
      return(
        <Manufacturer products={producers[key]} prodName={key}/>
      )
    })
    return (<Root>
        <PlaceOrderContainer>
          <PlaceOrder>Order Materials</PlaceOrder>
        </PlaceOrderContainer>
        {rendMan}
        <PlaceOrderContainer>
          <PlaceOrder>Order Materials</PlaceOrder>
        </PlaceOrderContainer>
      </Root>)
  }
}
