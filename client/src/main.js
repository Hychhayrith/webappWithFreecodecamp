// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/Component/Global/Panel'
Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
Vue.component('panel', Panel);
sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
