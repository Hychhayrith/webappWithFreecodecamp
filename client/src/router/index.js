import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Songs from '@/components/songs'
import Login from '@/components/login'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/viewSong'
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
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    }
  ]
})
