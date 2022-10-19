import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearEmpleados from '../components/CrearEmpleados.vue'
import EditarEmpleados from '../components/EditarEmpleados.vue'
import ListarEmpleados from '../components/ListarEmpleados.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'CrearEmpleados',
    component: CrearEmpleados
  },
  {
    path: '/editar',
    name: 'EditarEmpleados',
    component: EditarEmpleados
  },
  {
    path: '/listar',
    name: 'ListarEmpleados',
    component: ListarEmpleados
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
