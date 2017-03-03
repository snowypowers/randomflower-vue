import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Landing from './Landing.vue'

const app = new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
