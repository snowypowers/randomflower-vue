import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import css from '../node_modules/vue-material/dist/vue-material.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: { color: 'indigo', hue: '800' },
  accent: { color: 'blue-grey', hue: '500' },
  warn: { color: 'red', hue: '700' },
  background: { color: 'white'}
})

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  template: '<App/>',
  components: { App }

})
