import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/'
import { routerMode } from './config/env'
import './config/rem.js'
import FastClick from 'fastclick'
import "babel-polyfill";

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})