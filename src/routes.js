import Landing from './Landing.vue'
import Navi from './Navi.vue'
import Splash from './Splash.vue'
import Footer from './Footer.vue'
import NotFound from './NotFound.vue'
import Play from './Play.vue'

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
      splash: NotFound,
      navi: Navi,
      content: Foo,
      footer: Footer
    }
  },
  {
    path: '/play', components: {
      navi: Navi,
      content: Play,
      footer: Footer
    }
  },
  {
    path: '*', component: {
      splash: NotFound
    }
  }
]

export default routes
