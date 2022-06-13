import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccount from '../views/CreateAccount.vue'
import HelpView from '../views/HelpView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/criar-conta',
    name: 'Criar Conta',
    component: CreateAccount
  },
  {
    path: '/logar',
    name: 'Tela de Login',
    component: LoginView
  },
  {
    path: '/como-funciona',
    name: 'Como Funciona',
    component: HelpView
  },
  {
    path: '/contato',
    name: 'Tela de Contato',
    component: ContactView
  },
  {
    path: '/sobre',
    name: 'Tela de Sobre',
    component: AboutView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
