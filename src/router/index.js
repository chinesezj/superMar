import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import HomeNews from '../components/HomeNews.vue'
import HomeMessage from '../components/HomeMessage.vue'

Vue.use(VueRouter)
let Home = () => import('../views/Home.vue') 
let Profile = () => import('../views/Profile.vue')
const routes = [
   {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message/:name',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:'关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/profile',
    component:Profile,
    name:'profile',
    meta:{
      title:'档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach( (to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
} )

export default router
