import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c0ca534 = () => interopDefault(import('../pages/user-list/index.vue' /* webpackChunkName: "pages/user-list/index" */))
const _3fd1a551 = () => interopDefault(import('../pages/user-list/_id/index.vue' /* webpackChunkName: "pages/user-list/_id/index" */))
const _13a0a5d6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user-list",
    component: _3c0ca534,
    name: "user-list"
  }, {
    path: "/user-list/:id",
    component: _3fd1a551,
    name: "user-list-id"
  }, {
    path: "/",
    component: _13a0a5d6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
