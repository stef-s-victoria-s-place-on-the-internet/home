import { isFreeShipping } from './isFreeShipping'
import { getShippingRates } from './getShippingRates'

export const getShippingPrice = (
  iso,
  city,
  shippingRates = getShippingRates()
) => {
  // No shipping to The Hague
  console.log('free shipping?', iso, city);
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
