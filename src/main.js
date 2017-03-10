import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import VueMaterial from 'vue-material'

import App from './App.vue'
import routes from './routes.js'
import css from '../node_modules/vue-material/dist/vue-material.css'

import state from './store/state.js'
import mutations from './store/mutations.js'
import actions from './store/actions.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  //primary: { color: 'indigo', hue: '800' },
  accent: 'white',
  warn: { color: 'red', hue: '700' },
  //background: { color: 'grey'}
})

const scrollBehavior = (to, from, savedPosition) => {
  console.log([to, from, savedPosition])
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
})

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

const app = new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App),
  template: '<App/>',
  components: { App }

})
