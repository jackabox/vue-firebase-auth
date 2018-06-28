import Vue from 'vue'
import Router from 'vue-router'
import { auth } from '../firebase'

// Import Components
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

// Define our routes
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// check that we are auth'd before each router
router.beforeEach((to, from, next) => {
  // get the current user
  let currentUser = auth.currentUser

  // check if the record requires auth
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // if we aren't logged in + we need auth - take the user to login
  // if the route doesn't require auth (i.e. it's login or register) - take to dashboard
  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
