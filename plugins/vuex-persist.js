import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'oneacre.online-shoppingcart',
    storage: window.localStorage
  }).plugin(store);
}
