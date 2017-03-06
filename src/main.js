import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import App from './App.vue'
import Landing from './Landing.vue'
import Navi from './Navi.vue'
import Splash from './Splash.vue'
import Footer from './Footer.vue'
import css from '../node_modules/vue-material/dist/vue-material.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: { color: 'indigo', hue: '800' },
  accent: { color: 'blue-grey', hue: '500' },
  warn: { color: 'red', hue: '700' },
  background: { color: 'white'}
})

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
      splash: Splash,
      navi: Navi,
      content: Landing,
      footer: Footer
    }

  },
  {
    path: '/foo', components: {
      navi: defaultNavi,
      content: Foo,
      footer: Footer
    }
  },
  {
    path: '/bar', components: {
      navi: defaultNavi,
      content: Bar,
      footer: Footer
    }
  },
  {
    path: '*', components: {
      splash: Splash,
      footer: Footer
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
