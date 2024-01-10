import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Masculino from "../views/vestuario/Masculino.vue"
import Feminino from "../views/vestuario/Feminino.vue"
import Joias from "../views/acessorios/Joias.vue"
import Eletronicos from "../views/informatica/Eletronicos.vue"
import Description from "../views/Descriptions.vue";
import Administrator from "../views/panel/Administrator.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/vestuario/masculino',
      name: 'masculino',
      component: Masculino
    },
    {
      path: '/vestuario/feminino',
      name: 'feminino',
      component: Feminino
    }
    ,
    {
      path: '/acessorios/joias',
      name: 'joias',
      component: Joias
    },
    {
      path: '/informatica/eletronicos',
      name: 'eletronicos',
      component: Eletronicos
    }
    ,
    {
      path: '/descricao/:id',
      name: 'descricao',
      component:  Description
    }
    ,
    {
      path: '/administrador/',
      name: 'administrador',
      component: Administrator
    }
    ,
    {
      path: '/auth/acesso',
      name: 'acesso',
      component: Login
    }
    ,
    {
      path: '/auth/cadastrar',
      name: 'cadastrar',
      component: Register
    }
  ]
})

export default router
