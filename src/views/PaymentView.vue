<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-white/30 shadow-lg">
            <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
              <span class="text-xs font-bold text-white">💳</span>
            </div>
            <span class="text-sm font-medium text-white/90">To'lov</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              To'lovni Amalga Oshiring
            </span>
          </h1>

          <p class="text-lg text-white/80">
            {{ selectedPlan.name }} rejimiga o'tish uchun to'lov qiling
          </p>
        </div>

        <!-- Plan Summary -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mb-8">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-white/20 backdrop-blur-xl border border-white/30" :class="planIconClass">
                <span class="font-bold text-white">{{ selectedPlan.icon }}</span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white/90">{{ selectedPlan.name }} Rejim</h2>
                <p class="text-white/80">{{ selectedPlan.duration }}</p>
              </div>
            </div>
            <div class="text-right">
              <div class="text-3xl font-bold text-white/90">{{ formatPrice(selectedPlan.price) }}</div>
              <p class="text-white/70">so'm</p>
            </div>
          </div>

          <!-- Features -->
          <div class="border-t border-white/20 pt-6">
            <h3 class="text-lg font-semibold text-white/90 mb-4">Rejim imkoniyatlari:</h3>
            <ul class="space-y-2">
              <li v-for="feature in selectedPlan.features" :key="feature" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/30" :class="planCheckClass">
                  <span class="text-xs font-bold text-white">✓</span>
                </div>
                <span class="text-white/80">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Telegram Payment Info -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mb-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/30">
              <span class="text-white font-bold">📱</span>
            </div>

            <h2 class="text-2xl font-bold text-white/90 mb-4">Telegram orqali to'lov</h2>
            <p class="text-white/80 mb-6">
              To'lovni amalga oshirish uchun Telegram botimizga o'ting va to'lov qiling.
              To'lov muvaffaqiyatli bo'lgandan so'ng, sizning rejimingiz avtomatik ravishda faollashtiriladi.
            </p>

            <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-4 mb-6 border border-white/20">
              <p class="text-white/90 font-medium">
                💡 To'lov qilgandan so'ng, admin sizga token beradi va siz Pro rejimga o'tasiz!
              </p>
            </div>
          </div>
        </div>

        <!-- Admin Token Input Section -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mb-8">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
              <span class="text-white font-bold">🔑</span>
            </div>
            <h2 class="text-2xl font-bold text-white/90 mb-4">Admin Token Kiritish</h2>
            <p class="text-white/80 mb-6">
              Agar admin sizga token bergan bo'lsa, uni bu yerga kiriting va darhol Pro rejimga o'ting.
            </p>
          </div>

          <div class="max-w-md mx-auto">
            <div class="relative mb-4">
              <input
                v-model="adminToken"
                type="text"
                placeholder="Admin token kiriting (masalan: PRO_12345)"
                class="w-full px-6 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-center font-mono text-white placeholder-white/60 text-lg shadow-lg"
              >
              <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70">
                <span class="text-xl">🔑</span>
              </div>
            </div>

            <button
              @click="handleTokenActivation"
              :disabled="!adminToken.trim()"
              class="w-full bg-white/20 backdrop-blur-xl text-white py-4 px-8 rounded-2xl font-semibold border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg"
            >
              <span class="flex items-center justify-center gap-3">
                <span class="text-xl">🚀</span>
                <span>Token Faollashtirish</span>
              </span>
            </button>
          </div>

          <div v-if="tokenMessage" class="mt-6 p-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg" :class="tokenMessageClass">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg" :class="tokenMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'">
                <span>{{ tokenMessage.type === 'success' ? '✅' : '❌' }}</span>
              </div>
              <div>
                <h3 class="font-bold text-white/90 mb-1">{{ tokenMessage.title }}</h3>
                <p class="text-white/80 text-sm">{{ tokenMessage.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Button -->
        <div class="text-center">
          <button
            @click="redirectToTelegram"
            class="bg-white/20 backdrop-blur-xl text-white font-semibold py-4 px-12 rounded-2xl text-lg border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span class="flex items-center gap-3">
              <span class="text-xl">📱</span>
              <span>Telegram orqali {{ formatPrice(selectedPlan.price) }} so'm to'lash</span>
            </span>
          </button>

          <p class="text-sm text-white/70 mt-4">
            Telegram botimizga o'ting va to'lov qiling. To'lov muvaffaqiyatli bo'lgandan so'ng admin sizga token beradi.
          </p>
        </div>

        <!-- Payment Status -->
        <div v-if="paymentStatus" class="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20" :class="paymentStatusClass">
          <div class="flex items-center gap-3">
            <span class="text-xl">{{ paymentStatus.icon }}</span>
            <div>
              <h3 class="font-semibold text-white/90">{{ paymentStatus.title }}</h3>
              <p class="text-sm text-white/80">{{ paymentStatus.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSubscriptionStore } from '../stores/subscription'

const router = useRouter()
const route = useRoute()
const subscriptionStore = useSubscriptionStore()

interface PaymentStatus {
  type: 'success' | 'error' | 'info'
  icon: string
  title: string
  message: string
}

interface TokenMessage {
  type: 'success' | 'error'
  title: string
  text: string
}

const paymentStatus = ref<PaymentStatus | null>(null)
const adminToken = ref('')
const tokenMessage = ref<TokenMessage | null>(null)

const selectedPlan = computed(() => {
  const planId = route.query.plan || 'pro'
  return subscriptionStore.plans.find(plan => plan.id === planId) || subscriptionStore.plans[1]
})

const planIconClass = computed(() => {
  switch (selectedPlan.value.id) {
    case 'pro':
      return 'bg-gradient-to-br from-blue-400/30 to-indigo-400/30'
    case 'advanced':
      return 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'
    default:
      return 'bg-white/20'
  }
})

// Removed unused planPriceClass computed property

const planCheckClass = computed(() => {
  switch (selectedPlan.value.id) {
    case 'pro':
      return 'bg-blue-400/50'
    case 'advanced':
      return 'bg-purple-400/50'
    default:
      return 'bg-white/30'
  }
})

const paymentStatusClass = computed(() => {
  if (!paymentStatus.value) return ''
  switch (paymentStatus.value.type) {
    case 'success':
      return 'bg-emerald-100 text-emerald-700 border border-emerald-200'
    case 'error':
      return 'bg-red-100 text-red-700 border border-red-200'
    case 'info':
      return 'bg-blue-100 text-blue-700 border border-blue-200'
    default:
      return 'bg-slate-100 text-slate-700 border border-slate-200'
  }
})

const tokenMessageClass = computed(() => {
  if (!tokenMessage.value) return ''
  return tokenMessage.value.type === 'success'
    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
    : 'bg-red-100 text-red-700 border border-red-200'
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('uz-UZ').format(price)
}

const redirectToTelegram = () => {
  // Generate a unique session ID for this payment
  const sessionId = Date.now().toString()

  // Save session info to localStorage for later use
  localStorage.setItem('paymentSession', JSON.stringify({
    plan: selectedPlan.value.id,
    price: selectedPlan.value.price,
    sessionId: sessionId,
    timestamp: Date.now()
  }))

  // Telegram bot URL with return URL for token
  const returnUrl = encodeURIComponent(`${window.location.origin}/pro?token=`)
  const telegramBotUrl = `https://t.me/Dier_ai?start=payment_${selectedPlan.value.id}_${selectedPlan.value.price}_${sessionId}&return=${returnUrl}`

  // Telegram botga yo'naltirish
  window.open(telegramBotUrl, '_blank')

  // Foydalanuvchiga ma'lumot berish
  paymentStatus.value = {
    type: 'info',
    icon: '📱',
    title: 'Telegram botga yo\'naltirildi',
    message: 'Telegram botimizda to\'lov qiling. To\'lov muvaffaqiyatli bo\'lgandan so\'ng, admin sizga token beradi va siz avtomatik ravishda Pro sahifasiga yo\'naltirilasiz.'
  }
}

const handleTokenActivation = () => {
  if (!adminToken.value.trim()) {
    tokenMessage.value = {
      type: 'error',
      title: 'Xatolik',
      text: 'Iltimos, admin token kiriting!'
    }
    return
  }

  // Simple token validation (in real app, this would be more sophisticated)
  const token = adminToken.value.trim().toUpperCase()

  if (token.startsWith('PRO_')) {
    const success = subscriptionStore.activateWithToken(token, 'pro')
    if (success) {
      tokenMessage.value = {
        type: 'success',
        title: 'Muvaffaqiyat!',
        text: 'Pro rejim muvaffaqiyatli faollashtirildi! Endi barcha premium imkoniyatlardan foydalanishingiz mumkin.'
      }
      adminToken.value = ''

      // Redirect to maslahatlar after 3 seconds
      setTimeout(() => {
        router.push({ name: 'maslahatlar' })
      }, 3000)
    } else {
      tokenMessage.value = {
        type: 'error',
        title: 'Xatolik',
        text: 'Noto\'g\'ri token! Iltimos, to\'g\'ri token kiriting.'
      }
    }
  } else if (token.startsWith('ADV_')) {
    const success = subscriptionStore.activateWithToken(token, 'advanced')
    if (success) {
      tokenMessage.value = {
        type: 'success',
        title: 'Muvaffaqiyat!',
        text: 'Advanced rejim muvaffaqiyatli faollashtirildi! Endi barcha VIP imkoniyatlardan foydalanishingiz mumkin.'
      }
      adminToken.value = ''

      // Redirect to maslahatlar after 3 seconds
      setTimeout(() => {
        router.push({ name: 'maslahatlar' })
      }, 3000)
    } else {
      tokenMessage.value = {
        type: 'error',
        title: 'Xatolik',
        text: 'Noto\'g\'ri token! Iltimos, to\'g\'ri token kiriting.'
      }
    }
  } else {
    tokenMessage.value = {
      type: 'error',
      title: 'Noto\'g\'ri format',
      text: 'Token PRO_ yoki ADV_ bilan boshlanishi kerak. Masalan: PRO_12345 yoki ADV_67890'
    }
  }

  // Clear message after 8 seconds
  setTimeout(() => {
    tokenMessage.value = null
  }, 8000)
}

// Check if plan is specified on component mount
if (!route.query.plan) {
  router.push({ name: 'pro' })
}

// Check for token in URL parameters on component mount
const initializeComponent = () => {
  const urlToken = route.query.token as string
  if (urlToken && urlToken.trim()) {
    adminToken.value = urlToken.trim()
    handleTokenActivation()
    return
  }

  // Check localStorage for saved token
  const savedToken = localStorage.getItem('pendingToken')
  if (savedToken) {
    adminToken.value = savedToken
    handleTokenActivation()
    localStorage.removeItem('pendingToken') // Clear after use
    return
  }
}

// Initialize component
initializeComponent()
</script>

<style scoped>
/* Additional styles if needed */
</style>
