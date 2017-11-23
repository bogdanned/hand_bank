import fastBillCall from './fastBillCall'

export default async ({customer}) => {
  // fetch customer by name
  // if not create customer
  // create a bil
  const createCustomer = {
    service: 'customer.create',
    data: {
      customer_type: 'business',
      organization: 'Musterfirma2',
      last_name: customer.surname
    }
  }

  return await fastBillCall(createCustomer)
}
