<template>
  <div class="premium-recommendations">
    <!-- Premium Content Access Control -->
    <div v-if="!subscriptionStore.hasAccessToPremiumContent" class="premium-lock">
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
        <div class="text-center">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/30">
            <span class="text-white font-bold">🔒</span>
          </div>

          <h2 class="text-2xl font-bold text-white/90 mb-4">
            Premium Maslahatlar
          </h2>

          <p class="text-white/80 mb-6 max-w-md mx-auto">
            Bu maslahatlar faqat Pro yoki Advanced rejim foydalanuvchilari uchun mavjud.
            Premium imkoniyatlardan foydalanish uchun rejimga o'ting.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="$router.push({ name: 'pro' })"
              class="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-6 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Pro Rejimga O'tish
            </button>

            <button
              @click="showPreview = !showPreview"
              class="bg-white/10 backdrop-blur-xl text-white/90 font-semibold py-3 px-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              {{ showPreview ? 'Yashirish' : 'Ko\'rib Chiqish' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Premium Content Preview (when locked) -->
    <div v-if="!subscriptionStore.hasAccessToPremiumContent && showPreview" class="preview-content mt-8">
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg opacity-60">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30">
            <span class="text-white font-bold">⭐</span>
          </div>
          <h3 class="text-lg font-semibold text-white/90">Premium Maslahat</h3>
          <span class="px-2 py-1 bg-white/20 backdrop-blur-xl text-white/90 text-xs font-medium rounded-full border border-white/30">PRO</span>
        </div>

        <div class="space-y-3">
          <div class="h-4 bg-white/20 rounded animate-pulse"></div>
          <div class="h-4 bg-white/20 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-white/20 rounded animate-pulse w-1/2"></div>
        </div>

        <div class="mt-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
          <p class="text-sm text-white/80 font-medium">
            💡 Bu maslahatni to'liq o'qish uchun Pro rejimga o'ting!
          </p>
        </div>
      </div>
    </div>

    <!-- Premium Content (when unlocked) -->
    <div v-if="subscriptionStore.hasAccessToPremiumContent" class="premium-content">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/30">
            <span class="font-bold text-white">
              {{ subscriptionStore.isAdvanced ? '👑' : '⭐' }}
            </span>
          </div>
          <h2 class="text-2xl font-bold text-white/90">
            {{ subscriptionStore.isAdvanced ? 'VIP Maslahatlar' : 'Premium Maslahatlar' }}
          </h2>
          <span class="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-xl text-white/90 border border-white/30">
            {{ subscriptionStore.isAdvanced ? 'ADVANCED' : 'PRO' }}
          </span>
        </div>

        <p class="text-white/80">
          {{ subscriptionStore.isAdvanced
            ? 'Eng ekskluziv va chuqur maslahatlar. Shaxsiy konsultatsiya va VIP imkoniyatlar.'
            : 'Premium darajadagi maslahatlar va cheksiz imkoniyatlar.'
          }}
        </p>
      </div>

      <!-- Premium Recommendations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="recommendation in premiumRecommendations" :key="recommendation.id"
             class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">

          <!-- Recommendation Header -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-white/20 backdrop-blur-xl border border-white/30">
                <span class="font-bold text-white">{{ recommendation.icon }}</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white/90">{{ recommendation.title }}</h3>
                <p class="text-sm text-white/70">{{ recommendation.category }}</p>
              </div>
            </div>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-xl text-white/90 border border-white/30">
              {{ recommendation.tier }}
            </span>
          </div>

          <!-- Recommendation Content -->
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">{{ recommendation.description }}</p>

            <!-- Key Points -->
            <div v-if="recommendation.keyPoints" class="space-y-2">
              <h4 class="text-sm font-semibold text-white/90">Asosiy nuqtalar:</h4>
              <ul class="space-y-1">
                <li v-for="point in recommendation.keyPoints" :key="point" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-emerald-400 mt-1">•</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Action Items -->
            <div v-if="recommendation.actions" class="space-y-2">
              <h4 class="text-sm font-semibold text-white/90">Amal qilish:</h4>
              <ul class="space-y-1">
                <li v-for="action in recommendation.actions" :key="action" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-blue-400 mt-1">→</span>
                  <span>{{ action }}</span>
                </li>
              </ul>
            </div>

            <!-- Advanced Features (only for Advanced tier) -->
            <div v-if="subscriptionStore.isAdvanced && recommendation.advancedFeatures" class="space-y-2">
              <h4 class="text-sm font-semibold text-white/90">VIP Imkoniyatlar:</h4>
              <ul class="space-y-1">
                <li v-for="feature in recommendation.advancedFeatures" :key="feature" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-purple-400 mt-1">👑</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Recommendation Footer -->
          <div class="mt-6 pt-4 border-t border-white/20">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-white/70">
                <span>💡</span>
                <span>{{ recommendation.difficulty }}</span>
              </div>
              <button class="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">
                Batafsil →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Exclusive Content -->
      <div v-if="subscriptionStore.isAdvanced" class="mt-12">
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
              <span class="text-white font-bold">👑</span>
            </div>
            <h2 class="text-2xl font-bold text-white/90 mb-4">Advanced Ekskluziv</h2>
            <p class="text-white/80 max-w-2xl mx-auto">
              Faqat Advanced rejim foydalanuvchilari uchun maxsus maslahatlar va shaxsiy konsultatsiya imkoniyatlari.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 class="text-lg font-semibold text-white/90 mb-3">Individual AI Chat</h3>
              <p class="text-white/80 mb-4">Gemini AI bilan shaxsiy maslahat oling.</p>
              <button @click="$router.push({ name: 'individual-chat' })" class="bg-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300">
                AI Chat Boshlash
              </button>
            </div>

            <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 class="text-lg font-semibold text-white/90 mb-3">VIP Qo'llab-quvvatlash</h3>
              <p class="text-white/80 mb-4">Prioritet qo'llab-quvvatlash va tezkor javoblar.</p>
              <button class="bg-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300">
                Bog'lanish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSubscriptionStore } from '../stores/subscription'

const subscriptionStore = useSubscriptionStore()
const showPreview = ref(false)

const premiumRecommendations = computed(() => {
  const baseRecommendations = [
    {
      id: 1,
      title: 'Shaxsiy Brend Yaratish',
      category: 'Biznes Strategiya',
      description: 'O\'z brendingizni yaratish va rivojlantirish bo\'yicha chuqur maslahatlar. Rivojlanish yo\'li va marketing strategiyalari.',
      icon: '🚀',
      iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      iconColor: 'text-blue-600',
      tier: 'PRO',
      tierClass: 'bg-blue-100 text-blue-700',
      difficulty: 'O\'rta',
      keyPoints: [
        'Brend identifikatsiyasini aniqlash',
        'Maqsadli auditoriyani tushunish',
        'Reklama strategiyasini ishlab chiqish'
      ],
      actions: [
        'Brend kitobini yaratish',
        'Logo va vizual identifikatsiya',
        'Marketing kampaniyasini boshlash'
      ]
    },
    {
      id: 2,
      title: 'Passiv Daromad Manbalari',
      category: 'Moliyaviy Strategiya',
      description: 'Passiv daromad olish yo\'llari va investitsiya strategiyalari. Pul ishlash va boylik yaratish sirlari.',
      icon: '💰',
      iconBg: 'bg-gradient-to-br from-emerald-100 to-green-100',
      iconColor: 'text-emerald-600',
      tier: 'PRO',
      tierClass: 'bg-blue-100 text-blue-700',
      difficulty: 'Yuqori',
      keyPoints: [
        'Investitsiya portfelini diversifikatsiya qilish',
        'Passiv daromad manbalarini tanlash',
        'Risk boshqaruvi strategiyalari'
      ],
      actions: [
        'Investitsiya rejasini tuzish',
        'Passiv daromad manbalarini tanlash',
        'Muntazam monitoring va optimizatsiya'
      ]
    },
    {
      id: 3,
      title: 'AI va Avtomatlashtirish',
      category: 'Texnologiya',
      description: 'Sun\'iy intellekt va avtomatlashtirish texnologiyalaridan foydalanish. Biznes jarayonlarini optimizatsiya qilish.',
      icon: '🤖',
      iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
      iconColor: 'text-purple-600',
      tier: 'ADVANCED',
      tierClass: 'bg-purple-100 text-purple-700',
      difficulty: 'Yuqori',
      keyPoints: [
        'AI vositalarini tanlash va sozlash',
        'Biznes jarayonlarini avtomatlashtirish',
        'Ma\'lumotlar tahlili va bashorat'
      ],
      actions: [
        'AI vositalarini o\'rganish',
        'Pilot loyihani boshlash',
        'Natijalarni baholash va kengaytirish'
      ],
      advancedFeatures: [
        'Shaxsiy AI yordamchisi',
        'Maxsus algoritmlar',
        '1-on-1 texnik konsultatsiya'
      ]
    },
    {
      id: 4,
      title: 'Xalqaro Biznes Kengaytirish',
      category: 'Global Strategiya',
      description: 'Xalqaro bozorga chiqish va global biznes yuritish strategiyalari. Eksport-import va hamkorlik.',
      icon: '🌍',
      iconBg: 'bg-gradient-to-br from-amber-100 to-orange-100',
      iconColor: 'text-amber-600',
      tier: 'ADVANCED',
      tierClass: 'bg-purple-100 text-purple-700',
      difficulty: 'Yuqori',
      keyPoints: [
        'Xalqaro bozorlarni tadqiq qilish',
        'Qonuniy va soliq masalalari',
        'Mahalliy hamkorlar topish'
      ],
      actions: [
        'Bozor tadqiqotini o\'tkazish',
        'Qonuniy hujjatlarni tayyorlash',
        'Hamkorlik shartnomalarini tuzish'
      ],
      advancedFeatures: [
        'Xalqaro hamkorlar tarmog\'i',
        'Shaxsiy konsultatsiya',
        'Qonuniy yordam xizmati'
      ]
    },
    {
      id: 5,
      title: 'Psixologik Savodxonlik',
      category: 'Shaxsiy Rivojlanish',
      description: 'O\'z-o\'zini tushunish va boshqalar bilan munosabatlarni yaxshilash. Emotsional aqllilik va muloqot.',
      icon: '🧠',
      iconBg: 'bg-gradient-to-br from-indigo-100 to-purple-100',
      iconColor: 'text-indigo-600',
      tier: 'PRO',
      tierClass: 'bg-blue-100 text-blue-700',
      difficulty: 'O\'rta',
      keyPoints: [
        'Emotsional aqllilikni rivojlantirish',
        'Muloqot qobiliyatlarini yaxshilash',
        'Stress boshqaruvi texnikalari'
      ],
      actions: [
        'Kundalik refleksiya amaliyoti',
        'Muloqot ko\'nikmalarini mashq qilish',
        'Stress boshqaruvi strategiyalarini qo\'llash'
      ]
    },
    {
      id: 6,
      title: 'Kriptovalyuta va Blockchain',
      category: 'Zamonaviy Texnologiya',
      description: 'Kriptovalyuta investitsiyalari va blockchain texnologiyasidan foydalanish. DeFi va NFT bozorlari.',
      icon: '₿',
      iconBg: 'bg-gradient-to-br from-yellow-100 to-orange-100',
      iconColor: 'text-yellow-600',
      tier: 'ADVANCED',
      tierClass: 'bg-purple-100 text-purple-700',
      difficulty: 'Yuqori',
      keyPoints: [
        'Kriptovalyuta portfelini boshqarish',
        'DeFi protokollaridan foydalanish',
        'NFT va metaverse imkoniyatlari'
      ],
      actions: [
        'Kriptovalyuta portfelini yaratish',
        'DeFi protokollarini o\'rganish',
        'NFT loyihalarini ishlab chiqish'
      ],
      advancedFeatures: [
        'Shaxsiy kripto strategiyasi',
        'Smart contract yaratish',
        'Blockchain konsultatsiyasi'
      ]
    }
  ]

  // Filter recommendations based on subscription tier
  if (subscriptionStore.isAdvanced) {
    return baseRecommendations
  } else if (subscriptionStore.isPro) {
    return baseRecommendations.filter(rec => rec.tier === 'PRO')
  } else {
    return []
  }
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
