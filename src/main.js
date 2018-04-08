import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem.js'
import FastClick from 'fastclick'

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
