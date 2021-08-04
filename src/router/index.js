import Vue from 'vue'
import VueRouter from 'vue-router'
import Vocabulary from '../views/Vocabulary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Vocabulary',
    component: Vocabulary
  },
  {
    path: '/Verbs',
    name: 'Verbos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Verbs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
