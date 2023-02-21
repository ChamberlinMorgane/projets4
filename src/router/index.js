import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AproposView from '../views/AproposView.vue'
import MesprojetsView from '../views/MesprojetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Apropos', name: 'Apropos', component: AproposView },
    { path: '/Mesprojets', name: 'Mesprojets', component: MesprojetsView },
    // ici les autre routes
  ]
})

export default router
