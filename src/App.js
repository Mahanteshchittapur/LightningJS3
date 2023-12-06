import Blits from '@lightningjs/blits'

//import Home from './pages/Home.js'
import Portal from './pages/Portal.js'

export default Blits.Application({
  template: `
    <Element>

      <RouterView />
    </Element>
   `,
  routes: [
  { path: '/', component: Portal, options: { keepAlive: true } },
  { path: '/demos/loading',component: () => import ('./pages/Loading.js')},
],
})
