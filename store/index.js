export const state = () => ({
  shop: {
    products: [],
  },
})

export const mutations = {
  addShopItem(state, payload) {
    state.shop.products.push(payload)
  },
  removeShopItem(state, index) {
    state.shop.products.splice(index, 1)
  },
}
