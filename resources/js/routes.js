import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  }
]

const router = new Router({ routes })

export default router
