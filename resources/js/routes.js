import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Prevision from './pages/Prevision'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Prevision',
    path: '/predictions',
    component: Prevision
  }
]

const router = new Router({ routes })

export default router
