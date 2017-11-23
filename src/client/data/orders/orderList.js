import services from '../offer/services'


export default [
  {
    name: 'Order 1234234',
    id: 3456,
    services: services,
    date: new Date(),
    customer: {
      surname: "Surname",
      name: "Name",
      address: "test addres"
    }
  },
  {
    name: 'Order 1123123',
    id: 3457,
    services: services,
    date: new Date()
  },
  {
    name: 'Order 1232141',
    id: 3458,
    services: services,
    date: new Date()
  },
  {
    name: 'Order 1123123',
    id: 3459,
    services: services,
    date: new Date()
  }
]
