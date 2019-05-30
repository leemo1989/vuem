import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Geshou from '@/components/geshou'
import Bangdan from '@/components/bangdan'
import Search from '@/components/search'
import Tuijian from '@/components/tuijian'
import Blog from '@/components/blog'
import Morelist from '@/components/morelist'
import Musicplay from '@/components/musicplay'
import Rankdetail from '@/components/rankdetail'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/musicplay',
        name:"Musicplay",
        component: Musicplay,
      },
      {
        path:'/rankdetail/:id',
        name:"Rankdetail",
        component: Rankdetail,
      },
      {
        path:'/',
        redirect:'/tuijian',
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path:'/geshou',
        component: Geshou,
      },
      {
        path:'/bangdan',
        component: Bangdan,
      },
      {
        path:'/tuijian',
        component:Tuijian,
      },
      {
        path:'/search',
        component: Search,
      },
      {
        path:'/blog',
        component: Blog,
      },
      {
        path:'/morelist',
        name:"Morelist",
        component: Morelist,
      },
  ]
})