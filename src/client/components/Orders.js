import React from 'react'
import styled from 'styled-components'
import Order from './order'
import OrderMan from './orderByMan'
import { Menu, Segment } from 'semantic-ui-react'

import orderEx from '../data/orders/order'


import Header from './Header'


const Root = styled.div`

`

let orders = [orderEx, orderEx, orderEx]

export default class Orders extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      order: ""
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(e){
    e.preventDefault()
    this.setState({
      order: "man"
    })
  }

  render(){
    let ordersRen = orders.map(o => {
      if(this.state.order == "man"){
        return(
          <OrderMan order={o}></OrderMan>
        )
      }else{
        return(
          <Order order={o}></Order>
        )
      }
    })
    let activeItem = false
    return <Root>
      <Header title={"Orders"} />
      <Menu pointing secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='Order Materials' active={this.state.order === 'man'} onClick={this.onClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      {ordersRen}
    </Root>
  }
}
