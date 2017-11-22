import React from 'react'
import styled from 'styled-components'

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
    <h6>{`Manufacturer: ${manufacturer}`}</h6>
  </ProdRoot>
)

const Products = ({products}) => {
  let prodRend = products.map(p => (<Product product={p}/>))
  return (
    <div>
      {prodRend}
    </div>
  )
}

const Service = ({service: {name, products, quality}}) => (
  <ServiceRoot>
    <h3>{`${quality} ${name}`}</h3>
    {products && <Products products={products}/>}
  </ServiceRoot>
)

export default({order}) => {
  let services = order.services.map(s => (
    <Service service={s} key={s.name}></Service>
  ))
  return <Root>
      <h1>{order.name}</h1>
      {services}
    </Root>
}
