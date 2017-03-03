import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Landing from './Landing.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const defaultSplash = { template: '<div> SPLASH!</div>' }
const defaultNavi = {
  template: `<div>NavBar
  <router-link to="/foo"> Foo </router-link>
  <router-link to="/bar"> Bar </router-link>
</div>`}
const defaultContent = { template: '<div> Content </div>' }
const defaultFooter = { template: '<div> This is a footer </div>' }

const routes = [
  {
    path: '/', components: {
      splash: defaultSplash,
      navi: defaultNavi,
      content: defaultContent,
      footer: defaultFooter
    }

  },
  {
    path: '/foo', components: {
      splash: defaultSplash,
      navi: defaultNavi,
      content: Foo,
      footer: defaultFooter
    }
  },
  {
    path: '/bar', components: {
      splash: defaultSplash,
      navi: defaultNavi,
      content: Bar,
      footer: defaultFooter
    }
  }
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
