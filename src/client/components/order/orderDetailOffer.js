import React from 'react'
import styled from 'styled-components'
import groupByManufacturer from '../../controllers/groupByManufacturer'

import createCustomer from '../../controllers/fastBill/createCustomer'

const Root = styled.div`
  width: 100%;
  padding: 10px;
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
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
`

const Name = styled.p`
  width: 30%;
`

const Product = ({product: {name, price, producer}}) => (
  <ProdRoot>
    <Name>{`${name}`}</Name>
    <h6>{`Price: ${price}`}</h6>
    <h6>{`Manufacturer: ${producer}`}</h6>
  </ProdRoot>
)

const Products = ({products}) => {
  let prodRend = products.map(p => (<Product product={p} key={p.name}/>))
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

const PlaceOrder = styled.button`
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
  padding: 5px;
  font-size: 14px;
  border-radius: 0px;
  :focus{
    outline: none;
  }
`

const CtaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export default class OrdersMan extends React.Component{
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e){
    createCustomer(this.props.order)
  }
  render(){
    let servicesRen = this.props.order.services.map(s => {
      return(
        <Service key={s.id} service={s} />
      )
    })
    return (<Root>
        <CtaContainer>
          <PlaceOrder onClick={this.onClick}>Create Customer</PlaceOrder>
        </CtaContainer>
        {servicesRen}
      </Root>)
  }
}
