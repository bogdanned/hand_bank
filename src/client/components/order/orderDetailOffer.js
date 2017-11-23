import React from 'react'
import styled from 'styled-components'
import groupByManufacturer from '../../controllers/groupByManufacturer'

import createBill from '../../controllers/fastBill/createBill'

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
  padding-right: 30px;
  padding-left: 30px;
  :focus{
    outline: none;
  }
  :hover{
    background-color: white;
    color: #2ecc71;
    border-color: #2ecc71;
  }
  :focus{
    outline: none;
    border-color: #2ecc71;
  }
`

const ViewBill = styled.a`
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
  padding: 5px;
  font-size: 14px;
  border-radius: 0px;
  padding-right: 30px;
  padding-left: 30px;
  :hover{
    background-color: white;
    color: #2ecc71;
    border-color: #2ecc71;
  }
  :focus{
    outline: none;
    border-color: #2ecc71;
  }
`

const CtaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default class OrdersMan extends React.Component{
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      bill: false
    }
  }
  async onClick(e){
    console.log('--a-sdasd')
    e.preventDefault()

    let res = await createBill(this.props.order)
    let bill = await res.json()
    console.log(bill)
    this.setState({
      bill: bill.url
    })
  }
  render(){
    let servicesRen = this.props.order.services.map(s => {
      return(
        <Service key={s.id} service={s} />
      )
    })
    return (<Root>
        <CtaContainer>

          {
          <PlaceOrder onClick={this.onClick}>Generate Invoice</PlaceOrder>

          }
          {
            this.state.bill && <ViewBill href={'/invoice_234567.pdf'}>
              View Invoice
            </ViewBill>

          }
        </CtaContainer>
        {servicesRen}
      </Root>)
  }
}
