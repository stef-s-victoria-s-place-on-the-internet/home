import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'stef-s-victoria-s-place-on-the-internet',
    storage: window.localStorage
  }).plugin(store);
}
