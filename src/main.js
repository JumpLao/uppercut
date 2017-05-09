// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/style.scss'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueImageCompare from 'vue-image-compare'
import store from '@/stores'
import * as VueGoogleMaps from 'vue2-google-maps'
import moment from 'moment'
import VueMoment from 'vue-moment'
import CurrencyFilter from '@/filters/currency'
window.moment = moment
Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)
Vue.use(VueImageCompare)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCzfpoICPA8EjZjKzo81VRknevEQ-j_43k'
  }
})
Vue.filter('currency', CurrencyFilter)
Vue.use(VueMoment)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
