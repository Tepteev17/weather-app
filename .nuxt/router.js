import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b9ad372 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _11a596b7 = () => interopDefault(import('../pages/company.vue' /* webpackChunkName: "pages/company" */))
const _198ec673 = () => interopDefault(import('../pages/features.vue' /* webpackChunkName: "pages/features" */))
const _11ea710c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _214b012c = () => interopDefault(import('../pages/weather-location/_location/index.vue' /* webpackChunkName: "pages/weather-location/_location/index" */))
const _0867ff36 = () => interopDefault(import('../pages/weather-location/_location/daily/index.vue' /* webpackChunkName: "pages/weather-location/_location/daily/index" */))
const _fcf8f0ac = () => interopDefault(import('../pages/weather-location/_location/monthly/index.vue' /* webpackChunkName: "pages/weather-location/_location/monthly/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1b9ad372,
    name: "about"
  }, {
    path: "/company",
    component: _11a596b7,
    name: "company"
  }, {
    path: "/features",
    component: _198ec673,
    name: "features"
  }, {
    path: "/",
    component: _11ea710c,
    name: "index"
  }, {
    path: "/weather-location/:location",
    component: _214b012c,
    name: "weather-location-location"
  }, {
    path: "/weather-location/:location?/daily",
    component: _0867ff36,
    name: "weather-location-location-daily"
  }, {
    path: "/weather-location/:location?/monthly",
    component: _fcf8f0ac,
    name: "weather-location-location-monthly"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
