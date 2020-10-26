import auth from '@/midleware/auth'
import { MidlewareContextTypes } from '@/types/midleware-context'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import { store as AuthStore } from '../store/auth/store'
import log from '@/midleware/log'
import guess from '@/midleware/guess'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/auth/auth.vue'),
    meta: {
      middleware: [guess]
    },
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('../views/auth/login.vue'),
      },
      {
        path: 'register',
        name: 'auth-register',
        component: () => import('../views/auth/register.vue'),
        meta: {
          middleware: [log, auth]
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//#region middleware

const middlewarePipeline = (
  context: MidlewareContextTypes,
  middleware: Array<Function>,
  index: number
) => {
  const nextMiddleware = middleware[index]

  if (nextMiddleware) {
    return () => {
      const nextPipeline = middlewarePipeline(context, middleware, index + 1)

      nextMiddleware({ ...context, next: nextPipeline })
    }
  }

  return context.next
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware

    const context = {
      to,
      from,
      next,
      store,
      auth: AuthStore
    } as MidlewareContextTypes

    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
    })
  }

  return next()
})

//#endregion

export default router
