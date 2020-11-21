
import { getProductSum } from "./getProductSum";
import { getVatPercentage } from "./getVatPercentage";

export const getTotalOrderPrice = (products, iso, shipping = 0) => {
  return (getProductSum(products) * getVatPercentage(iso)) + shipping
}

