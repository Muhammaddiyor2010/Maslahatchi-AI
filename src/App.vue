
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="relative z-50 h-12">
      <div class="absolute inset-0 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"></div>
      <div class="relative container mx-auto px-4 h-full">
        <div class="flex justify-center items-center h-full">
          <!-- Navigation Links -->
          <div class="flex gap-1 lg:gap-2 items-center">
            <router-link
              to="/"
              class="nav-link-glass"
              :class="{ 'nav-link-glass-active': $route.name === 'home' }"
            >
              <span class="hidden sm:inline">Bosh Sahifa</span>
              <span class="sm:hidden">Bosh</span>
            </router-link>
            <router-link
              to="/maslahatlar"
              class="nav-link-glass"
              :class="{ 'nav-link-glass-active': $route.name === 'maslahatlar' }"
            >
              <span class="hidden sm:inline">Maslahatlar</span>
              <span class="sm:hidden">Maslahat</span>
            </router-link>
            <router-link
              to="/biz-haqimizda"
              class="nav-link-glass"
              :class="{ 'nav-link-glass-active': $route.name === 'biz-haqimizda' }"
            >
              <span class="hidden sm:inline">Biz Haqimizda</span>
              <span class="sm:hidden">Haqimizda</span>
            </router-link>

            <!-- Pro Link -->
            <router-link
              to="/pro"
              class="nav-link-glass nav-link-glass-pro"
              :class="{ 'nav-link-glass-active': $route.name === 'pro' }"
            >
              <span class="hidden sm:inline">Pro</span>
              <span class="sm:hidden">Pro</span>
            </router-link>

            <!-- Individual Chat Link (only for Advanced users) -->
            <router-link
              v-if="subscriptionStore.isAdvanced"
              to="/individual-chat"
              class="nav-link-glass nav-link-glass-advanced"
              :class="{ 'nav-link-glass-active': $route.name === 'individual-chat' }"
            >
              <span class="hidden sm:inline">AI Chat</span>
              <span class="sm:hidden">AI</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative">
      <router-view />
    </main>

    <!-- Floating Action Button -->
    <div class="fixed bottom-6 right-6 z-40">
      <button class="w-12 h-12 bg-white/20 backdrop-blur-xl text-white rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-white/30">
        <span class="text-lg font-bold">?</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSubscriptionStore } from './stores/subscription'

const subscriptionStore = useSubscriptionStore()

const subscriptionBadgeClass = computed(() => {
  switch (subscriptionStore.currentPlan.id) {
    case 'pro':
      return 'bg-blue-100 text-blue-700 border border-blue-200'
    case 'advanced':
      return 'bg-purple-100 text-purple-700 border border-purple-200'
    default:
      return 'bg-slate-100 text-slate-700 border border-slate-200'
  }
})
</script>

<style scoped>
/* iOS 16 Liquid Glass Navigation Links */
.nav-link-glass {
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  height: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (min-width: 640px) {
  .nav-link-glass {
    padding: 0.375rem 1rem;
    font-size: 0.9rem;
    height: 2.25rem;
  }
}

.nav-link-glass:hover {
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.nav-link-glass-active {
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.nav-link-glass-pro {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  border-color: rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(20px);
}

.nav-link-glass-pro:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4));
  color: rgba(255, 255, 255, 1);
  border-color: rgba(139, 92, 246, 0.5);
  transform: translateY(-1px);
}

.nav-link-glass-pro.nav-link-glass-active {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5));
  color: rgba(255, 255, 255, 1);
  border-color: rgba(139, 92, 246, 0.6);
}

.nav-link-glass-advanced {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  border-color: rgba(168, 85, 247, 0.4);
  backdrop-filter: blur(20px);
}

.nav-link-glass-advanced:hover {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4));
  color: rgba(255, 255, 255, 1);
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-1px);
}

.nav-link-glass-advanced.nav-link-glass-active {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5));
  color: rgba(255, 255, 255, 1);
  border-color: rgba(168, 85, 247, 0.6);
}

/* iOS 16 Style Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  backdrop-filter: blur(10px);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Liquid Glass Animation */
@keyframes liquidFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.nav-link-glass:hover {
  animation: liquidFloat 2s ease-in-out infinite;
}

/* Glassmorphism backdrop blur enhancement */
.nav-link-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  pointer-events: none;
}
</style>
