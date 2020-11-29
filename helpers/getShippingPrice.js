import { isFreeShipping } from './isFreeShipping'
import { getShippingRates } from './getShippingRates'

export const getShippingPrice = (
  iso,
  city,
  shippingRates = getShippingRates()
) => {
  // No shipping to The Hague
  if (isFreeShipping(iso, city)) {
    return 0
  }

  // Any other location, add shipping
  const rate = shippingRates[iso]
  if (rate) {
    return rate.singlePrice
  }

  return null
}
