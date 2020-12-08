export const getStatus = (customer) => {
  if (customer.status) {
    return customer.status
  }

  if (_.has(customer, ['paid'])) {
    return customer.paid ? 'paid' : 'in-process'
  }

  return 'unknown'
}
