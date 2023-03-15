import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AproposView from '../views/AproposView.vue'
import AfficheView from '../views/AfficheView.vue'
import CartevisiteView from '../views/CartevisiteView.vue'
import CitadelleView from '../views/CitadelleView.vue'
import EmorphozView from '../views/EmorphozView.vue'
import MesprojetsView from '../views/MesprojetsView.vue'
import MentionlegalesView from '../views/MentionlegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Apropos', name: 'Apropos', component: AproposView },
    { path: '/Mesprojets', name: 'Mesprojets', component: MesprojetsView },
    { path: '/Affiche', name: 'Affiche', component: AfficheView },
    { path: '/Cartevisite', name: 'Cartevisite', component: CartevisiteView },
    { path: '/Citadelle', name: 'Citadelle', component: CitadelleView },
    { path: '/Emorphoz', name: 'Emorphoz', component: EmorphozView },
    { path: '/Mentionlegales', name: 'Mentionlegales', component: MentionlegalesView },
    // ici les autres routes
  ]
})

export default router
