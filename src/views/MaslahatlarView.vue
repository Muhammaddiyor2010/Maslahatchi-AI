<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-white/30 shadow-lg">
            <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
              <span class="text-xs font-bold text-white">📖</span>
            </div>
            <span class="text-sm font-medium text-white/90">Maslahatlar Katalogi</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              Maslahatlar Katalogi
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Eng mashhur maslahatlar va foydali ma'lumotlar to'plami.
            <span class="text-white/95 font-semibold">Har bir maslahat</span> sizning hayotingizni yaxshilash uchun
            maxsus tanlangan.
          </p>
        </div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-12">

      <!-- Search Bar -->
      <div class="max-w-3xl mx-auto mb-12">
        <div class="relative">
          <input type="text" placeholder="Maslahat qidiring..."
            class="w-full px-4 py-3 pl-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-base shadow-lg text-white placeholder-white/60"
            v-model="searchQuery">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-lg">
            <span class="font-bold">🔍</span>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="flex flex-wrap justify-center gap-2 mb-16">
        <button v-for="category in categories" :key="category.id" @click="selectedCategory = category.id" :class="[
          'px-4 py-2 rounded-2xl border transition-all duration-300 font-medium text-sm shadow-lg backdrop-blur-xl',
          selectedCategory === category.id
            ? 'bg-white/30 text-white border-white/50 shadow-xl'
            : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-xl'
        ]">
          <span class="flex items-center gap-2">
            <span class="text-sm font-bold">
              {{ category.id === 'all' ? '★' :
                category.id === 'IT' ? '💻' :
                  category.id === 'SMM' ? '→' :
                    category.id === 'Mobilografiya' ? '📱' :
                      category.id === 'Grafik Dizayn' ? '■' :
              category.id === 'Kompyuter sitib olish' ? '$' : '?' }}
            </span>
            <span class="hidden sm:inline">{{ category.name }}</span>
            <span class="sm:hidden">{{ category.name.split(' ')[0] }}</span>
          </span>
        </button>
      </div>

      <!-- Advice Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="advice in filteredAdvice" :key="advice.id"
          class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-xl mr-4 border border-white/30">
              <span class="text-white font-bold">
                {{ advice.icon === '💻' ? '💻' :
                   advice.icon === '🚀' ? '→' :
                   advice.icon === '📱' ? '📱' :
                   advice.icon === '🎨' ? '■' :
                   advice.icon === '💰' ? '$' : '●' }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-white/90">
              {{ advice.title }}
            </h3>
          </div>

          <p class="text-white/80 mb-4 leading-relaxed text-sm">
            {{ advice.description }}
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span class="px-3 py-1 bg-white/20 backdrop-blur-xl text-white/90 font-medium rounded-full text-xs w-fit border border-white/30">
              {{ advice.category }}
            </span>
            <button class="flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors duration-200">
              <span>Batafsil</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-16">
        <button class="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-8 rounded-2xl text-base border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
          Ko'proq Maslahatlar
        </button>
      </div>

      <!-- Premium Recommendations Section -->
      <div class="mt-20">
        <PremiumRecommendations />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PremiumRecommendations from '../components/PremiumRecommendations.vue'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Barchasi' },
  { id: 'IT', name: 'IT' },
  { id: 'SMM', name: 'SMM' },
  { id: 'Mobilografiya', name: 'Mobilografiya' },
  { id: 'Grafik Dizayn', name: 'Grafik Dizayn' },
  { id: 'Kompyuter sotib olish', name: 'Kompyuter sotib olish' }
]

const adviceList = [
  {
    id: 1,
    title: 'Asoslarni puxta o‘rgan',
    description: 'Kompyuter ishlash prinsiplari, tarmoq (network), operatsion tizimlar va dasturlashning asoslarini yaxshi tushunib olish keyinchalik barcha yo‘nalishlarda yordam beradi.',
    category: 'IT',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Bir yo‘nalishni tanla va chuqurlash',
    description: 'IT juda keng: dasturlash, kiberxavfsizlik, data science, web development, mobil ilovalar, AI va boshqalar. Bir yo‘nalishda asosiy bilimni mustahkamlab, keyin yon sohaga o‘tish foydaliroq.',
    category: 'IT',
    icon: '💻'
  },
  {
    id: 3,
    title: 'Amaliyot – nazariyadan ustun',
    description: 'Faqat kitob yoki kurs emas, balki real loyihalar qil, GitHub’da kod joyla, kichik freelans ishlarni bajar. Bu bilimlarni tezda mustahkamlaydi.',
    category: 'IT',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Ingliz tilini o‘rgan',
    description: 'Deyarli barcha documentatsiya, qo‘llanmalar va so‘nggi yangiliklar ingliz tilida. Ingliz tilini bilish IT’da tez rivojlanish uchun eng katta qurollardan biridir.',
    category: 'IT',
    icon: '💻'
  },
  {
    id: 5,
    title: 'Networking va hamjamiyatga qo‘shil',
    description: 'Forumlar, Telegram/Discord guruhlar, hackathonlar, meetuplarda qatnash. Bu orqali yangi imkoniyatlar, do‘stlar va hamkorliklar topasan.',
    category: 'IT',
    icon: '💻'
  },
  {
    id: 6,
    title: 'Brend va auditoriyani tushun',
    description: 'Har bir biznesning o‘z xaridorlari va ularning ehtiyojlari bor. Kontent yaratishdan oldin maqsadli auditoriyani (yoshi, qiziqishi, muammolari) chuqur o‘rgan.',
    category: 'SMM',
    icon: '🚀'
  },
  {
    id: 7,
    title: 'Kontent strategiyasini tuz',
    description: 'Reels, post, story, karusel, live efir kabi formatlarni aralashtir. Faqat reklama emas, balki foydali maslahatlar, kulgili postlar, savol-javoblar ham joyla.',
    category: 'SMM',
    icon: '🚀'
  },
  {
    id: 8,
    title: 'Vizual va kreativlikka e’tibor ber',
    description: 'Ijtimoiy tarmoqlarda birinchi taassurot rasm va video orqali bo‘ladi. Professional dizayn, rang uyg‘unligi, brend uslubini shakllantir.',
    category: 'SMM',
    icon: '🚀'
  },
  {
    id: 9,
    title: 'Natijalarni o‘lcha va tahlil qil',
    description: 'Like, share, comment emas, balki reach, CTR, conversion kabi ko‘rsatkichlarni kuzat. Nima ishlayotgani va nima ishlamayotganini tezda aniqlab, strategiyani yangilab bor.',
    category: 'SMM',
    icon: '🚀'
  },
  {
    id: 10,
    title: 'Barqarorlik va trendlar',
    description: 'Doimiy post qilish va trendlarni o‘z biznesga moslashtirib ishlatish muhim. Trendni shunchaki ko‘chirib emas, balki kreativ tarzda o‘zlashtirish kerak.',
    category: 'SMM',
    icon: '🚀'
  },
  {
    id: 11,
    title: 'Asosiy texnikani bilib ol',
    description: 'Yorug‘lik, kompozitsiya, kadrlash (rule of thirds), fokus va ekspozitsiyani boshqarishni o‘rgan. Telefon qanchalik kuchli bo‘lmasin, bu bilimlarsiz sifatli kontent chiqmaydi.',
    category: 'Mobilografiya',
    icon: '📱'
  },
  {
    id: 12,
    title: 'Yorug‘lik – eng katta quroling',
    description: 'Tabiiy yorug‘lik (quyosh chiqishi yoki botishi payti – “golden hour”) eng yaxshi natija beradi. Sun’iy yoritishda esa softbox yoki ring lightdan foydalan.',
    category: 'Mobilografiya',
    icon: '📱'
  },
  {
    id: 13,
    title: 'Stabilizatsiya qil',
    description: 'Videoda titroq eng katta dushman. Gimbal, tripod yoki oddiy qo‘l texnikalari bilan kadrlarga barqarorlik ber.',
    category: 'Mobilografiya',
    icon: '📱'
  },
  {
    id: 14,
    title: 'Tahrir qilishni o‘rgan',
    description: 'Lightroom, CapCut, VN, LumaFusion yoki DaVinci Resolve kabi ilovalar bilan rang, kontrast va montajni sifatli qil. Montaj – kontentni jonlantiradigan bosqich.',
    category: 'Mobilografiya',
    icon: '📱'
  },
  {
    id: 15,
    title: 'Storytelling va kreativlik',
    description: 'Faqat chiroyli video emas, balki hikoya aytishga harakat qil. Odamlar hissiyot beradigan, qiziqarli yoki foydali kontentni ko‘proq tomosha qiladi va ulashadi.',
    category: 'Mobilografiya',
    icon: '📱'
  },
  {
    id: 16,
    title: 'Asosiy dizayn prinsiplarini o‘rgan',
    description: 'Balans, kontrast, ierarxiya, bo‘sh joy (white space) va tipografiya kabi asoslar dizaynni professional ko‘rsatadi.',
    category: 'Grafik Dizayn',
    icon: '🎨'
  },
  {
    id: 17,
    title: 'Minimalizm – kuchli qurol',
    description: 'Juda ko‘p rang, shrift yoki element ishlatish dizaynni chalkashtiradi. Oddiy va aniq dizayn ko‘proq ta’sir qiladi.',
    category: 'Grafik Dizayn',
    icon: '🎨'
  },
  {
    id: 18,
    title: 'Rang va shrift uyg‘unligiga e’tibor ber',
    description: 'Rang psixologiyasi (masalan, ko‘k – ishonch, qizil – energiya) va 2–3 xil shrift bilan ishlash dizaynni uyg‘un qiladi.',
    category: 'Grafik Dizayn',
    icon: '🎨'
  },
  {
    id: 19,
    title: 'Amaliyot – eng yaxshi o‘qituvchi',
    description: 'Behance, Dribbble kabi saytlardan ilhom ol, lekin nusxa qilma. Kundalik kichik loyihalar qil (logo, banner, social media post), vaqt o‘tib uslubing shakllanadi.',
    category: 'Grafik Dizayn',
    icon: '🎨'
  },
  {
    id: 20,
    title: 'Trendlardan xabardor bo‘l',
    description: 'Flat design, 3D, gradientlar, minimalizm, AI-generated art – bularni bilib, lekin faqat mos joyda ishlat. Brend yoki loyiha ruhiga qarab trendni qo‘llash kerak.',
    category: 'Grafik Dizayn',
    icon: '🎨'
  },
  {
    id: 21,
    title: 'Maqsadingni aniqla',
    description: 'Agar faqatgina internet, Word va Excel uchun kerak bo‘lsa – arzonroq kompyuter yetarli. Agar dasturlash, dizayn yoki montaj uchun bo‘lsa – kuchliroq model tanlash kerak.',
    category: 'Kompyuter sotib olish',
    icon: '💰'
  },
  {
    id: 22,
    title: 'Protsessorga e’tibor ber.',
    description: 'Intel i5/i7 yoki AMD Ryzen 5/7 kundalik ishlar va professional dasturlar uchun yaxshi tanlov. Juda eski yoki kuchsiz protsessorlardan (Celeron, Pentium) uzoqroq yur.',
    category: 'Kompyuter sotib olish',
    icon: '💰'
  },
  {
    id: 23,
    title: 'Operativ xotira (RAM) yetarli bo‘lsin',
    description: 'Oddiy ishlarga 8GB yetadi, lekin dasturlash, dizayn va ko‘p oynali ishlar uchun kamida 16GB bo‘lishi maqsadga muvofiq. Og‘ir montaj va 3D ishlarga esa 32GB va undan',
    category: 'Kompyuter sotib olish',
    icon: '💰'
  },
  {
    id: 24,
    title: 'SSD shart.',
    description: 'HDD juda sekin ishlaydi. Kamida 256GB SSD tanla. Agar katta hajm kerak bo‘lsa, SSD + HDD kombinatsiyasi yaxshi variant.',
    category: 'Kompyuter sotib olish',
    icon: '💰'
  },
  {
    id: 25,
    title: 'Monitor va videokarta.',
    description: 'Agar faqat oddiy ishlarga bo‘lsa, integratsiyalangan grafik karta ham yetadi. O‘yin, dizayn yoki montaj uchun esa alohida NVIDIA RTX/GTX yoki AMD Radeon videokartasi zarur. Shuningdek, IPS panel va Full HD ekran sifati ham muhim.',
    category: 'Kompyuter sotib olish',
    icon: '💰'
  }

]

const filteredAdvice = computed(() => {
  let filtered = adviceList

  if (selectedCategory.value !== 'all') {
    // Oddiy filtr
    filtered = filtered.filter(advice => advice.category === selectedCategory.value)
  } else {
    // Har bir kategoriyadan faqat 1 ta maslahat olish
    const uniqueByCategory = {}
    filtered.forEach(advice => {
      if (!uniqueByCategory[advice.category]) {
        uniqueByCategory[advice.category] = advice
      }
    })
    filtered = Object.values(uniqueByCategory)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    filtered = filtered.filter(advice =>
      advice.title.toLowerCase().includes(q) ||
      advice.description.toLowerCase().includes(q) ||
      advice.category.toLowerCase().includes(q)
    )
  }

  return filtered
})



</script>

<style scoped>
/* Additional styles if needed */
</style>
