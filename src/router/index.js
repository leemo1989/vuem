import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Geshou from '@/components/geshou'
import Bangdan from '@/components/bangdan'
import Search from '@/components/search'
import Tuijian from '@/components/tuijian'
import Morelist from '@/components/morelist'
import Musicplay from '@/components/musicplay'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/musicplay',
        name:"Musicplay",
        component: Musicplay,
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
        path:'/morelist',
        name:"Morelist",
        component: Morelist,
      },
  ]
})