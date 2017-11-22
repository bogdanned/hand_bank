import React from 'react'
import styled from 'styled-components'

import {Menu} from 'semantic-ui-react'

import ordersList from '../../data/orders/orderList'
import OrderDetailSupplier from './orderDetailSupplier'
import OrderDetailOffer from './orderDetailOffer'


const Root = styled.div`
  width: 100%;
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


const Product = ({product: {name, price, producer}}) => (
  <ProdRoot>
    <h6>{`${name}`}</h6>
    <h6>{`Price: ${price}`}</h6>
    <h6>{`Manufacturer: ${producer}`}</h6>
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

export default class Order extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      order: "offer"
    }
    this.onClickOffer = this.onClickOffer.bind(this)
    this.onClickSupplier = this.onClickSupplier.bind(this)
  }

  onClickOffer(e){
    e.preventDefault()
    this.setState({
      order: "offer"
    })
  }

  onClickSupplier(e){
    e.preventDefault()
    this.setState({
      order: "supplier"
    })
  }

  render(){
    let order = ordersList.find(o => (o.id == this.props.match.params.id))
    let services = order.services.map(s => (
      <Service service={s} key={s.name}></Service>
    ))
    return <Root>
          <Header title={`Order: ${order.name}`}></Header>
          <Menu pointing secondary>
            <Menu.Item name='Offer Details' active={this.state.order === 'offer'} onClick={this.onClickOffer} />
            <Menu.Item name='Materials' active={this.state.order === 'supplier'} onClick={this.onClickSupplier} />
          </Menu>
        {this.state.order === 'offer' && <OrderDetailOffer order={order}/>}
        {this.state.order === 'supplier' && <OrderDetailSupplier order={order}/>}
      </Root>
  }
}
