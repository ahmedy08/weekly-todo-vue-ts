import { createRouter, createWebHistory } from 'vue-router'
import ViewBase from '@/views/ViewBase.vue'
import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/TodoView.vue'
import ChartsView from '@/views/ChartsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: ViewBase,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomeView
        },
        {
          path: 'todo',
          name: 'Todo',
          component: TodoView
        },
        {
          path: 'charts',
          name: 'Charts',
          component: ChartsView
        }
      ]
    },
  ]
})


export default router
