import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Landing from './Landing.vue'

Vue.use(VueRouter)

const Base = { template: '<div> Lets Start! </div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  {path: '/', component: Base},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
]

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
