export const getProductSum = (products) => {
  return products.reduce((iterator, product) => {
    return iterator + product.price;
  }, 0);
}
