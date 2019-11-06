import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'
import My from '../views/My.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/layout/home'
  },
  {
    path:'/layout',
    component:Layout,
    children:[
      {
        path:'/layout/home',
        component:Home
      },
      {
        path:'/layout/my',
        component:My
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
