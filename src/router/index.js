import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home | App',
    }
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue'),
    meta: {
      title: 'Posts',
    }
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/404',
    name: 'Notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  },
  {
    path: '**',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
