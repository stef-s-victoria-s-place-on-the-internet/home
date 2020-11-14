import Vue from'vue'
import VueScroll from 'vue-scroll'
import VueResize from 'vue-resize'

Vue.use(VueResize)
Vue.use(VueScroll)

// For Poetic and Politics of Erasure we should ignore this element
Vue.config.ignoredElements = ['erasure-content']
