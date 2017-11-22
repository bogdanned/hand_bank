import React from 'react'
import styled from 'styled-components'
import groupByManufacturer from '../controllers/groupByManufacturer'


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
  padding: 20px;
  border-radius: 4px;
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




export default class OrdersMan extends React.Component{
  render(){
    let producers = groupByManufacturer(this.props.order)
    let rendMan = Object.keys(producers).map(key => {
      console.log(producers[key], 'producer')
      return(
        <Manufacturer products={producers[key]} prodName={key}/>
      )
    })
    return (<Root>
        <h1>{this.props.order.name}</h1>
        {rendMan}
      </Root>)
  }
}
