export const getShippingRates = async () => {
  return $axios.$get('/shop/shipping/rates')
}
