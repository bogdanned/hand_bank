import React from 'react'

import offer from '../data/offer'

import groupByManufacturer from '../controllers/groupByManufacturer'

export default () => {
  console.log(groupByManufacturer(offer))
  return <h1>test:</h1>
}
