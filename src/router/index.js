import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccount from '../views/CreateAccount.vue'
import CreateProfile from '../views/CreateProfile.vue'
import WhatsView from '../views/WhatsView.vue'
import PartnersView from '../views/PartnersView.vue'
import AccountHome from '../views/AccountHome.vue'
import AccountOferecerCarona from '../views/AccountOferecerCarona.vue'
import AccountPedirCarona from '../views/AccountPedirCarona.vue'
import AccountProfile from '../views/AccountProfile.vue'
import AccountFavourites from '../views/AccountFavourites.vue'
import AccountHistory from '../views/AccountHistory.vue'
import Denuncia from '../views/Denuncia.vue'
// import AccountChat from '../views/AccountChat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/criar-conta',
    name: 'CriarConta',
    component: CreateAccount
  },
  {
    path: '/criar-perfil',
    name: 'CriarPerfil',
    component: CreateProfile
  },
  {
    path: '/logar',
    name: 'Tela de Login',
    component: LoginView
  },
  {
    path: '/como-funciona',
    name: 'Como Funciona',
    component: WhatsView
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
  {
    path: '/a-faculdade',
    name: 'Tela da Faculdade',
    component: PartnersView
  },
  {
    path: '/account-home',
    name: 'Home logado',
    component: AccountHome
  },
  {
    path: '/account-motorista',
    name: 'Oferecer Caronas logado',
    component: AccountOferecerCarona
  },
  {
    path: '/account-caroneiro',
    name: 'Pedir Caronas logado',
    component: AccountPedirCarona
  },
  {
    path: '/account-profile',
    name: 'Perfil logado',
    component: AccountProfile
  },
  {
    path: '/account-favourites',
    name: 'Favoritos logado',
    component: AccountFavourites
  },
  {
    path: '/account-history',
    name: 'Historico logado',
    component: AccountHistory
  },
  {
    path: '/account-denuncia',
    name: 'Denuncia',
    component: Denuncia
  },  
  // {
  //   path: '/account-chat',
  //   name: 'Chat logado',
  //   component: AccountChat
  // },
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
