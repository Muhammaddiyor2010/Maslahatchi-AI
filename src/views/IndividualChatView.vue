<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/30 shadow-lg">
          <span class="text-white font-bold">🤖</span>
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
          <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
            Individual AI Maslahatchi
          </span>
        </h1>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          <span class="text-white/95 font-semibold">Gemini AI</span> bilan shaxsiy maslahat oling.
          Har qanday savolingizga <span class="text-white/95 font-semibold">individual javob</span> oling.
        </p>
      </div>

      <!-- Chat Container -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <!-- Chat Header -->
          <div class="bg-white/20 backdrop-blur-xl border-b border-white/20 p-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30">
                <span class="text-white text-lg">👑</span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white/90">Advanced AI Maslahatchi</h3>
                <p class="text-sm text-white/70">Gemini AI • Online</p>
              </div>
              <div class="ml-auto">
                <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="h-96 overflow-y-auto p-4 space-y-4" ref="chatContainer">
            <!-- Welcome Message -->
            <div v-if="messages.length === 0" class="text-center py-8">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
                <span class="text-white">👋</span>
              </div>
              <h4 class="text-xl font-bold text-white/90 mb-2">Xush kelibsiz!</h4>
              <p class="text-white/80">Savolingizni yozing va AI maslahatchi javob beradi.</p>
            </div>

            <!-- Messages -->
            <div v-for="message in messages" :key="message.id" class="flex" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
              <div class="max-w-xs lg:max-w-md" :class="message.role === 'user' ? 'order-2' : 'order-1'">
                <div class="flex items-end gap-2" :class="message.role === 'user' ? 'flex-row-reverse' : 'flex-row'">
                  <!-- Avatar -->
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                       :class="message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white/20 backdrop-blur-xl text-white border border-white/30'">
                    {{ message.role === 'user' ? 'S' : 'AI' }}
                  </div>

                  <!-- Message Bubble -->
                  <div class="px-4 py-3 rounded-2xl"
                       :class="message.role === 'user'
                         ? 'bg-blue-500 text-white'
                         : 'bg-white/20 backdrop-blur-xl text-white/90 border border-white/30'">
                    <p class="text-sm leading-relaxed">{{ message.content }}</p>
                    <p class="text-xs mt-1 opacity-70">{{ formatTime(message.timestamp) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="isTyping" class="flex justify-start">
              <div class="max-w-xs lg:max-w-md">
                <div class="flex items-end gap-2">
                  <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xl text-white border border-white/30 flex items-center justify-center text-sm font-bold">
                    AI
                  </div>
                  <div class="px-4 py-3 rounded-2xl bg-white/20 backdrop-blur-xl text-white/90 border border-white/30">
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                      <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Input -->
          <div class="bg-white/20 backdrop-blur-xl border-t border-white/20 p-4">
            <form @submit.prevent="sendMessage" class="flex gap-3">
              <div class="flex-1 relative">
                <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Savolingizni yozing..."
                  class="w-full px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white placeholder-white/60 pr-12"
                  :disabled="isTyping"
                >
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70">
                  <span class="text-lg">💬</span>
                </div>
              </div>
              <button
                type="submit"
                :disabled="!newMessage.trim() || isTyping"
                class="bg-white/20 backdrop-blur-xl text-white px-6 py-3 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <span class="text-lg">🚀</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="mt-6">
          <h4 class="text-lg font-bold text-white/90 mb-4 text-center">Tez Savollar</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <button
              v-for="quickQuestion in quickQuestions"
              :key="quickQuestion"
              @click="sendQuickQuestion(quickQuestion)"
              :disabled="isTyping"
              class="bg-white/10 backdrop-blur-xl text-white/90 px-4 py-3 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {{ quickQuestion }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useSubscriptionStore } from '../stores/subscription'

const subscriptionStore = useSubscriptionStore()

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const messages = ref<Message[]>([])
const newMessage = ref('')
const isTyping = ref(false)
const chatContainer = ref<HTMLElement | null>(null)

const quickQuestions = [
  'IT yo\'nalishi',
  'SMM strategiyasi',
  'Grafik dizayn',
  'Kompyuter sotib olish'
]

// Check if user has Advanced access
const hasAdvancedAccess = computed(() => {
  return subscriptionStore.isAdvanced && subscriptionStore.userSubscription.isActive
})

const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content: newMessage.value.trim(),
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  const currentMessage = newMessage.value.trim()
  newMessage.value = ''
  scrollToBottom()

  // Show typing indicator
  isTyping.value = true
  scrollToBottom()

  try {
    // Call Gemini API
    const response = await callGeminiAPI(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date()
    }

    messages.value.push(aiMessage)
  } catch (error) {
    console.error('Error calling Gemini API:', error)

    // Fallback response based on message content
    const fallbackResponse = getFallbackResponse(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: fallbackResponse,
      timestamp: new Date()
    }

    messages.value.push(aiMessage)
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}

const sendQuickQuestion = (question: string) => {
  newMessage.value = question
  sendMessage()
}

const getFallbackResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('it') || lowerMessage.includes('dasturlash') || lowerMessage.includes('programming') || lowerMessage.includes('yo\'nalishi')) {
    return `IT yo'nalishi bo'yicha maslahat:

1. **Frontend Development**: React, Vue, Angular - veb interfeyslar
2. **Backend Development**: Node.js, Python, Java - server logikasi
3. **Mobile Development**: React Native, Flutter - mobil ilovalar
4. **Data Science**: Python, R - ma'lumotlar tahlili
5. **DevOps**: Docker, Kubernetes - deployment va monitoring
6. **Cybersecurity**: Xavfsizlik mutaxassisi

**Boshlash uchun:**
• HTML, CSS, JavaScript o'rganing
• Bir dasturlash tilini tanlang (Python yoki JavaScript)
• GitHub portfolio yarating
• Amaliy loyihalar qiling

Qaysi yo'nalishda ishlashni xohlaysiz?`
  }

  if (lowerMessage.includes('smm') || lowerMessage.includes('social media') || lowerMessage.includes('strategiyasi')) {
    return `SMM strategiyasi bo'yicha maslahat:

1. **Platforma tanlash**: Instagram, TikTok, Telegram, YouTube
2. **Kontent rejasi**: Postlar, stories, reels uchun mavzular
3. **Vizual identitet**: Ranglar, shriftlar, logo
4. **Auditoriya tahlili**: Kim sizning mijozlaringiz?
5. **Engagement**: Mijozlar bilan muloqot
6. **Analitika**: Natijalarni kuzatish

**Muvaffaqiyatli SMM uchun:**
• Muntazam posting (kuniga 1-2 post)
• Hashtag strategiyasi
• Mijozlar bilan interaktiv muloqot
• Trendlarni kuzatish va ulardan foydalanish

Qaysi platformada ishlashni xohlaysiz?`
  }

  if (lowerMessage.includes('grafik') || lowerMessage.includes('dizayn') || lowerMessage.includes('design')) {
    return `Grafik dizayn bo'yicha maslahat:

1. **Dizayn asoslari**: Ranglar, tipografiya, kompozitsiya
2. **Dasturlar**: Adobe Photoshop, Illustrator, Figma
3. **Logo dizayn**: Brend identiteti yaratish
4. **SMM dizayn**: Instagram postlar, stories
5. **Print dizayn**: Broshyuralar, bannerlar
6. **UI/UX**: Veb-sayt va ilova interfeyslari

**Boshlash uchun:**
• Adobe Creative Suite o'rganing
• Dizayn asoslarini o'rganing
• Portfolio yarating
• Freelance ishlar qiling
• Dizayn jamiyatlariga qo'shiling

Qaysi turdagi dizayn bilan ishlashni xohlaysiz?`
  }

  if (lowerMessage.includes('kompyuter') || lowerMessage.includes('computer') || lowerMessage.includes('sotib olish') || lowerMessage.includes('laptop')) {
    return `Kompyuter sotib olish bo'yicha maslahat:

1. **Maqsadni aniqlang**:
   • Dasturlash uchun
   • O'yinlar uchun
   • Ofis ishlari uchun
   • Grafik dizayn uchun

2. **Asosiy komponentlar**:
   • **Processor**: Intel i5/i7 yoki AMD Ryzen 5/7
   • **RAM**: 8GB minimum, 16GB tavsiya
   • **Storage**: SSD 256GB+ (tez ishlash uchun)
   • **Graphics**: Dizayn/o'yin uchun alohida video karta

3. **Brendlar**: Dell, HP, Lenovo, ASUS, Acer
4. **Narx diapazoni**: $500-2000 (maqsadga qarab)

**Tavsiyalar**:
• Yangi vs ishlatilgan
• Kafolat va xizmat ko'rsatish
• Upgrade imkoniyatlari

Qanday maqsadda kompyuter kerak?`
  }

  // Default response
  return `Rahmat, savolingizni qabul qildim!

Men sizga yordam berishga harakat qilaman. Savolingizni batafsilroq yozing yoki quyidagi mavzulardan birini tanlang:

• IT yo'nalishi
• SMM strategiyasi
• Grafik dizayn
• Kompyuter sotib olish

Qaysi mavzuda ko'proq ma'lumot kerak?`
}

const callGeminiAPI = async (message: string): Promise<string> => {
  const API_KEY = 'AIzaSyAISA3NSddevDGlOrwkoEC6NMi6A4Efbqw'
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

  const requestBody = {
    contents: [{
      parts: [{
        text: `Sen professional maslahatchi AI'san. Foydalanuvchi savoliga o'zbek tilida batafsil va foydali javob ber. Savol: ${message}`
      }]
    }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    }
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', errorText)
      throw new Error(`API Error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('API Response:', data)

    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts[0].text
    } else {
      console.error('Invalid response format:', data)
      throw new Error('Invalid response format')
    }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

// Check access on component mount
if (!hasAdvancedAccess.value) {
  // Redirect to Pro page if not Advanced user
  window.location.href = '/pro'
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
