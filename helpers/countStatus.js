import { getStatus } from './getStatus'

export const countStatus = (customers, status) => {
  if (status === 'all') {
    return customers.length
  }

  const allOfStatus = customers.filter((customer) => {
    if (status === getStatus(customer)) {
      return true
    }

    return false
  })

  return allOfStatus.length
}
