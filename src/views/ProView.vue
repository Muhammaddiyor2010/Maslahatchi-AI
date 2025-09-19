<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-white/30 shadow-lg">
            <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
              <span class="text-xs font-bold text-white">👑</span>
            </div>
            <span class="text-sm font-medium text-white/90">Pro Versiya</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              Pro Versiyaga O'ting
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span class="text-white/95 font-semibold">Premium maslahatlar</span> va
            <span class="text-white/95 font-semibold">cheksiz imkoniyatlar</span> bilan
            hayotingizni keyingi bosqichga olib chiqing.
          </p>
        </div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <!-- Current Subscription Status -->
      <div v-if="subscriptionStore.isPremium" class="mb-12">
        <div class="bg-white/20 backdrop-blur-xl text-white rounded-2xl p-6 text-center shadow-lg border border-white/30">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="text-2xl">{{ subscriptionStore.currentPlan.icon }}</span>
            <h2 class="text-2xl font-bold">Siz {{ subscriptionStore.currentPlan.name }} rejimidasiz!</h2>
          </div>
          <p class="text-white/80">
            {{ subscriptionStore.currentPlan.name }} rejimining barcha imkoniyatlaridan foydalanmoqdasiz.
          </p>
          <div v-if="subscriptionStore.userSubscription.expiresAt" class="mt-4 text-sm text-white/70">
            Muddat: {{ formatExpiryDate(subscriptionStore.userSubscription.expiresAt) }}
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Free Plan -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
              <span class="text-white font-bold">🆓</span>
            </div>
            <h3 class="text-2xl font-bold text-white/90 mb-2">Bepul</h3>
            <div class="text-3xl font-bold text-white/80 mb-2">0 so'm</div>
            <p class="text-white/70">Cheksiz</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in subscriptionStore.plans[0].features" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                <span class="text-xs text-white">✓</span>
              </div>
              <span class="text-white/80">{{ feature }}</span>
            </li>
          </ul>

          <button
            @click="subscriptionStore.downgradeToFree()"
            :disabled="subscriptionStore.userSubscription.plan === 'free'"
            :class="[
              'w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 border',
              subscriptionStore.userSubscription.plan === 'free'
                ? 'bg-white/20 text-white/50 cursor-not-allowed border-white/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/20 hover:border-white/30'
            ]"
          >
            {{ subscriptionStore.userSubscription.plan === 'free' ? 'Joriy Rejim' : 'Bepul Rejimga O\'tish' }}
          </button>
        </div>

        <!-- Pro Plan -->
        <div class="bg-white/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-white/30 backdrop-blur-xl text-white px-4 py-1 rounded-full text-sm font-semibold border border-white/40">
              Eng Mashhur
            </span>
          </div>

          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/40">
              <span class="text-white font-bold">⭐</span>
            </div>
            <h3 class="text-2xl font-bold text-white/90 mb-2">Pro</h3>
            <div class="text-3xl font-bold text-white/90 mb-2">20,000 so'm</div>
            <p class="text-white/70">20 daqiqa</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in subscriptionStore.plans[1].features" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40">
                <span class="text-xs text-white">✓</span>
              </div>
              <span class="text-white/80">{{ feature }}</span>
            </li>
          </ul>

          <button
            @click="handleUpgrade('pro')"
            :disabled="subscriptionStore.userSubscription.plan === 'pro'"
            :class="[
              'w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 border',
              subscriptionStore.userSubscription.plan === 'pro'
                ? 'bg-white/30 text-white/50 cursor-not-allowed border-white/40'
                : 'bg-white/20 text-white hover:bg-white/30 border-white/30 hover:border-white/40 shadow-lg hover:shadow-xl'
            ]"
          >
            {{ subscriptionStore.userSubscription.plan === 'pro' ? 'Joriy Rejim' : 'Pro Rejimga O\'tish' }}
          </button>
        </div>

        <!-- Advanced Plan -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
              <span class="text-white font-bold">👑</span>
            </div>
            <h3 class="text-2xl font-bold text-white/90 mb-2">Advanced</h3>
            <div class="text-3xl font-bold text-white/90 mb-2">100,000 so'm</div>
            <p class="text-white/70">100 daqiqa</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in subscriptionStore.plans[2].features" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                <span class="text-xs text-white">✓</span>
              </div>
              <span class="text-white/80">{{ feature }}</span>
            </li>
          </ul>

          <button
            @click="handleUpgrade('advanced')"
            :disabled="subscriptionStore.userSubscription.plan === 'advanced'"
            :class="[
              'w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 border',
              subscriptionStore.userSubscription.plan === 'advanced'
                ? 'bg-white/20 text-white/50 cursor-not-allowed border-white/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl'
            ]"
          >
            {{ subscriptionStore.userSubscription.plan === 'advanced' ? 'Joriy Rejim' : 'Advanced Rejimga O\'tish' }}
          </button>
        </div>
      </div>

      <!-- Admin Token Section -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16 border border-white/20 shadow-lg">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/30 shadow-lg">
            <span class="text-white font-bold">🔑</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-white/90 mb-6">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              Admin Token Kiritish
            </span>
          </h2>
          <p class="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Telegram orqali to'lov qilgandan so'ng, admin sizga token beradi.
            <span class="text-white/95 font-semibold">Token kiritib</span>, darhol
            <span class="text-white/95 font-semibold">Pro yoki Advanced rejimga o'ting</span>.
          </p>

          <div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/30 shadow-lg">
            <div class="flex items-center justify-center gap-3 mb-4">
              <span class="text-2xl">💡</span>
              <h3 class="text-xl font-bold text-white/90">Token Formati</h3>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <span class="font-mono bg-white/20 px-4 py-2 rounded-xl text-white/90 border border-white/30 text-lg font-bold">PRO_xxxxx</span>
              <span class="text-white/70 text-lg">yoki</span>
              <span class="font-mono bg-white/20 px-4 py-2 rounded-xl text-white/90 border border-white/30 text-lg font-bold">ADV_xxxxx</span>
            </div>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="space-y-6">
            <div class="relative">
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

          <div v-if="tokenMessage" class="mt-8 p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg" :class="tokenMessageClass">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" :class="tokenMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'">
                <span>{{ tokenMessage.type === 'success' ? '✅' : '❌' }}</span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white/90 mb-1">{{ tokenMessage.title }}</h3>
                <p class="text-white/80">{{ tokenMessage.text }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Features Comparison -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
        <h2 class="text-3xl font-bold text-center text-white/90 mb-12">
          Rejimlar Taqqoslash
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/20">
                <th class="text-left py-4 px-6 font-semibold text-white/90">Imkoniyatlar</th>
                <th class="text-center py-4 px-6 font-semibold text-white/90">Bepul</th>
                <th class="text-center py-4 px-6 font-semibold text-white/90">Pro</th>
                <th class="text-center py-4 px-6 font-semibold text-white/90">Advanced</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name" class="border-b border-white/10">
                <td class="py-4 px-6 font-medium text-white/80">{{ feature.name }}</td>
                <td class="text-center py-4 px-6">
                  <span v-if="feature.free" class="text-emerald-400 font-bold">✓</span>
                  <span v-else class="text-white/40">✗</span>
                </td>
                <td class="text-center py-4 px-6">
                  <span v-if="feature.pro" class="text-emerald-400 font-bold">✓</span>
                  <span v-else class="text-white/40">✗</span>
                </td>
                <td class="text-center py-4 px-6">
                  <span v-if="feature.advanced" class="text-emerald-400 font-bold">✓</span>
                  <span v-else class="text-white/40">✗</span>
                </td>
              </tr>
            </tbody>
          </table>
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

interface TokenMessage {
  type: 'success' | 'error'
  title: string
  text: string
}

const adminToken = ref('')
const tokenMessage = ref<TokenMessage | null>(null)

const tokenMessageClass = computed(() => {
  if (!tokenMessage.value) return ''
  return tokenMessage.value.type === 'success'
    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
    : 'bg-red-100 text-red-700 border border-red-200'
})

const comparisonFeatures = [
  { name: 'Asosiy maslahatlar', free: true, pro: true, advanced: true },
  { name: 'Premium maslahatlar', free: false, pro: true, advanced: true },
  { name: 'VIP maslahatlar', free: false, pro: false, advanced: true },
  { name: 'Cheksiz javoblar', free: false, pro: true, advanced: true },
  { name: 'Shaxsiy maslahatchi', free: false, pro: true, advanced: true },
  { name: 'Shaxsiy konsultatsiya', free: false, pro: false, advanced: true },
  { name: '24/7 qo\'llab-quvvatlash', free: false, pro: true, advanced: true },
  { name: 'Prioritet qo\'llab-quvvatlash', free: false, pro: false, advanced: true },
  { name: 'Ekskluziv kontent', free: false, pro: false, advanced: true },
  { name: '1-on-1 sessiyalar', free: false, pro: false, advanced: true }
]

const handleUpgrade = (planId: 'pro' | 'advanced') => {
  // Redirect to payment page
  router.push({
    name: 'payment',
    query: { plan: planId }
  })
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

const formatExpiryDate = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}


// Check for existing token on component mount
const initializeComponent = () => {
  // Check URL parameters for token
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

  // Check if user already has an active subscription
  if (subscriptionStore.isPremium) {
    tokenMessage.value = {
      type: 'success',
      title: 'Rejim faol',
      text: `Siz allaqachon ${subscriptionStore.currentPlan.name} rejimidasiz!`
    }
  }
}

// Initialize component
initializeComponent()
</script>

<style scoped>
/* Additional styles if needed */
</style>
