import Vue from 'vue'
import VueRouter from 'vue-router'
import TablasController from './controllers/tablas'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/tablas', component: TablasController }
  ]
})

export default router
