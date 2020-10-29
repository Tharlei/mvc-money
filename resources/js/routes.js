import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import PrevisionIndex from './pages/Predictions/Index'
import PrevisionNew from './pages/Predictions/New'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'PrevisionIndex',
    path: '/predictions',
    component: PrevisionIndex
  },
  {
    name: 'PrevisionNew',
    path: '/prevision/new',
    component: PrevisionNew
  }
]

const router = new Router({ routes })

export default router
