// Shipping to The Hague is free
const FREE_SHIPPING_CITIES = ['the hague', 'den haag']

export const isFreeShipping = (iso, city) => {
  const isNL = iso === 'NL'
  const isFreeCity = FREE_SHIPPING_CITIES.includes(_.lowerCase(city))

  return isNL && isFreeCity
}
