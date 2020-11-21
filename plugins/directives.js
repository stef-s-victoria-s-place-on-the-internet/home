import Vue from'vue'
import VueScroll from 'vue-scroll'
import VueResize from 'vue-resize'
import vSelect from 'vue-select'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

Vue.component('v-select', vSelect)

Vue.use(VueResize)
Vue.use(VueScroll)

// For Poetic and Politics of Erasure we should ignore this element
Vue.config.ignoredElements = ['erasure-content']
