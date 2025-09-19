<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Success Icon -->
        <div class="w-24 h-24 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-lg">
          <span class="font-bold">✓</span>
        </div>

        <!-- Success Message -->
        <h1 class="text-3xl sm:text-4xl font-bold mb-6">
          <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
            To'lov Muvaffaqiyatli!
          </span>
        </h1>

        <p class="text-lg text-white/80 mb-8">
          {{ subscriptionStore.currentPlan.name }} rejim muvaffaqiyatli faollashtirildi.
          Endi barcha premium imkoniyatlardan foydalanishingiz mumkin!
        </p>

        <!-- Plan Details -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mb-8">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-white/20 backdrop-blur-xl border border-white/30" :class="planIconClass">
              <span class="font-bold text-white">{{ subscriptionStore.currentPlan.icon }}</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white/90">{{ subscriptionStore.currentPlan.name }} Rejim</h2>
              <p class="text-white/70">{{ subscriptionStore.currentPlan.duration }}</p>
            </div>
          </div>

          <!-- Features -->
          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-white/90 mb-4">Sizning imkoniyatlaringiz:</h3>
            <ul class="space-y-2">
              <li v-for="feature in subscriptionStore.currentPlan.features" :key="feature" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/30" :class="planCheckClass">
                  <span class="text-xs font-bold text-white">✓</span>
                </div>
                <span class="text-white/80">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="$router.push({ name: 'maslahatlar' })"
            class="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-8 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Premium Maslahatlar
          </button>

          <button
            @click="$router.push({ name: 'home' })"
            class="bg-white/10 backdrop-blur-xl text-white/90 font-semibold py-3 px-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bosh Sahifa
          </button>
        </div>

        <!-- Expiry Info -->
        <div v-if="subscriptionStore.userSubscription.expiresAt" class="mt-8 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
          <p class="text-sm text-white/80">
            <span class="font-semibold text-white/90">Muddat:</span>
            {{ formatExpiryDate(subscriptionStore.userSubscription.expiresAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '../stores/subscription'

const subscriptionStore = useSubscriptionStore()

const planIconClass = computed(() => {
  switch (subscriptionStore.currentPlan.id) {
    case 'pro':
      return 'bg-gradient-to-br from-blue-400/30 to-indigo-400/30'
    case 'advanced':
      return 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'
    default:
      return 'bg-white/20'
  }
})

const planCheckClass = computed(() => {
  switch (subscriptionStore.currentPlan.id) {
    case 'pro':
      return 'bg-blue-400/50'
    case 'advanced':
      return 'bg-purple-400/50'
    default:
      return 'bg-white/30'
  }
})

const formatExpiryDate = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
