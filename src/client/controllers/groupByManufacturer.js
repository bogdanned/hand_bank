import _ from "lodash"

export default ({services}) => {
  let productsAll = []
  services.forEach(s => {
    if(s.products)
      s.products.forEach(p => {
        productsAll.push(p)
      })
  })
  return _.groupBy(productsAll, 'producer')
}
