import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Songs from '@/components/songs'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
