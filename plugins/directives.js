import Vue from'vue'
import VueScroll from 'vue-scroll'
import VueResize from 'vue-resize'
import vSelect from 'vue-select'
import Clipboard from 'v-clipboard'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.use(Clipboard)
Vue.use(VueResize)
Vue.use(VueScroll)

Vue.component('v-select', vSelect)

// For Poetic and Politics of Erasure we should ignore this element
Vue.config.ignoredElements = ['erasure-content']
