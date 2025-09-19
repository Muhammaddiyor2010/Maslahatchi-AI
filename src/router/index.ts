import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaslahatlarView from '../views/MaslahatlarView.vue'
import BizHaqimizdaView from '../views/BizHaqimizdaView.vue'
import ProView from '../views/ProView.vue'
import PaymentView from '../views/PaymentView.vue'
import PaymentSuccessView from '../views/PaymentSuccessView.vue'
import IndividualChatView from '../views/IndividualChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/maslahatlar',
      name: 'maslahatlar',
      component: MaslahatlarView
    },
    {
      path: '/biz-haqimizda',
      name: 'biz-haqimizda',
      component: BizHaqimizdaView
    },
    {
      path: '/pro',
      name: 'pro',
      component: ProView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/payment-success',
      name: 'payment-success',
      component: PaymentSuccessView
    },
    {
      path: '/individual-chat',
      name: 'individual-chat',
      component: IndividualChatView
    }
  ],
})

export default router
