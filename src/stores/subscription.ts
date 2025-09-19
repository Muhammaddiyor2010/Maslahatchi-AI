import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface SubscriptionPlan {
  id: 'free' | 'pro' | 'advanced'
  name: string
  price: number
  duration: string
  features: string[]
  color: string
  icon: string
}

export interface UserSubscription {
  plan: 'free' | 'pro' | 'advanced'
  isActive: boolean
  expiresAt?: Date
  token?: string
}

export const useSubscriptionStore = defineStore('subscription', () => {
  // Valid tokens for testing (more complex)
  const validTokens = ref({
    pro: [
      'PRO_7K9M2',
      'PRO_X4N8P',
      'PRO_Q1W5E',
      'PRO_R6T9Y',
      'PRO_U3I7O',
      'PRO_A2S5D',
      'PRO_F8G1H',
      'PRO_J4K6L',
      'PRO_Z9X2C',
      'PRO_V5B7N',
      'PRO_M3Q8W',
      'PRO_E6R4T'
    ],
    advanced: [
      'ADV_9L2K7',
      'ADV_P5N8X',
      'ADV_E1W4Q',
      'ADV_Y9T6R',
      'ADV_O7I3U',
      'ADV_D5S2A',
      'ADV_H1G8F',
      'ADV_L6K4J',
      'ADV_C2X9Z',
      'ADV_N7B5V',
      'ADV_W8Q3M',
      'ADV_T4R6E'
    ]
  })

  // Subscription plans
  const plans = ref<SubscriptionPlan[]>([
    {
      id: 'free',
      name: 'Bepul',
      price: 0,
      duration: 'Cheksiz',
      features: [
        'Asosiy maslahatlar',
        'Kategoriya bo\'yicha qidiruv',
        'Cheklangan javoblar'
      ],
      color: 'slate',
      icon: '🆓'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 20000,
      duration: '20 daqiqa',
      features: [
        'Barcha bepul imkoniyatlar',
        'Premium maslahatlar',
        'Cheksiz javoblar',
        'Shaxsiy maslahatchi',
        '24/7 qo\'llab-quvvatlash'
      ],
      color: 'blue',
      icon: '⭐'
    },
    {
      id: 'advanced',
      name: 'Advanced',
      price: 100000,
      duration: '100 daqiqa',
      features: [
        'Barcha Pro imkoniyatlar',
        'VIP maslahatlar',
        'Shaxsiy konsultatsiya',
        'Prioritet qo\'llab-quvvatlash',
        'Ekskluziv kontent',
        '1-on-1 sessiyalar'
      ],
      color: 'purple',
      icon: '👑'
    }
  ])

  // Current user subscription
  const userSubscription = ref<UserSubscription>({
    plan: 'free',
    isActive: true
  })

  // Computed properties
  const currentPlan = computed(() =>
    plans.value.find(plan => plan.id === userSubscription.value.plan) || plans.value[0]
  )

  const isPro = computed(() =>
    userSubscription.value.plan === 'pro' && userSubscription.value.isActive
  )

  const isAdvanced = computed(() =>
    userSubscription.value.plan === 'advanced' && userSubscription.value.isActive
  )

  const isPremium = computed(() =>
    isPro.value || isAdvanced.value
  )

  const hasAccessToPremiumContent = computed(() =>
    userSubscription.value.isActive && userSubscription.value.plan !== 'free'
  )

  // Actions
  const upgradeToPlan = (planId: 'pro' | 'advanced') => {
    userSubscription.value.plan = planId
    userSubscription.value.isActive = true
    userSubscription.value.expiresAt = new Date(Date.now() + (planId === 'pro' ? 20 * 60 * 1000 : 100 * 60 * 1000))

    // Save to localStorage
    localStorage.setItem('userSubscription', JSON.stringify(userSubscription.value))
  }

  const activateWithToken = (token: string, planId: 'pro' | 'advanced') => {
    // Check if token is valid
    const tokenList = validTokens.value[planId]
    if (token && tokenList.includes(token.toUpperCase())) {
      userSubscription.value.plan = planId
      userSubscription.value.isActive = true
      userSubscription.value.token = token.toUpperCase()
      userSubscription.value.expiresAt = new Date(Date.now() + (planId === 'pro' ? 20 * 60 * 1000 : 100 * 60 * 1000))

      // Save to localStorage
      localStorage.setItem('userSubscription', JSON.stringify(userSubscription.value))

      // Clear any pending tokens
      localStorage.removeItem('pendingToken')
      localStorage.removeItem('paymentSession')

      return true
    }
    return false
  }

  const savePendingToken = (token: string) => {
    localStorage.setItem('pendingToken', token)
  }

  const downgradeToFree = () => {
    userSubscription.value.plan = 'free'
    userSubscription.value.isActive = true
    userSubscription.value.expiresAt = undefined
    userSubscription.value.token = undefined

    // Save to localStorage
    localStorage.setItem('userSubscription', JSON.stringify(userSubscription.value))
  }

  const checkSubscriptionExpiry = () => {
    if (userSubscription.value.expiresAt && new Date() > userSubscription.value.expiresAt) {
      downgradeToFree()
    }
  }

  const loadSubscriptionFromStorage = () => {
    const stored = localStorage.getItem('userSubscription')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        userSubscription.value = {
          ...parsed,
          expiresAt: parsed.expiresAt ? new Date(parsed.expiresAt) : undefined
        }
        checkSubscriptionExpiry()
      } catch (error) {
        console.error('Error loading subscription from storage:', error)
      }
    }
  }

  // Initialize subscription from storage
  loadSubscriptionFromStorage()

  return {
    plans,
    userSubscription,
    currentPlan,
    isPro,
    isAdvanced,
    isPremium,
    hasAccessToPremiumContent,
    validTokens,
    upgradeToPlan,
    activateWithToken,
    savePendingToken,
    downgradeToFree,
    checkSubscriptionExpiry,
    loadSubscriptionFromStorage
  }
})
