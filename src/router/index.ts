import { createRouter, createWebHistory } from 'vue-router'
import ActiveBoardView from '../views/ActiveBoardView.vue'
import BoardView from '../views/BoardView.vue'
import ProjectView from '../views/ProjectView.vue'
import RoadmapView from '../views/RoadmapView.vue'
import SettingView from '../views/SettingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'active_board',
      component: ActiveBoardView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: RoadmapView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView
    }
  ]
})

export default router
