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
              <span class="text-xs font-bold text-white">👥</span>
            </div>
            <span class="text-sm font-medium text-white/90">Biz Haqimizda</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              Biz Haqimizda
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            <span class="text-white/95 font-semibold">Maslahatchi AI</span> - bu sizning shaxsiy maslahatchingiz.
            Biz sun'iy intellekt texnologiyalaridan foydalanib,
            <span class="text-white/95 font-semibold">har bir foydalanuvchiga</span> individual yondashuv bilan maslahat beramiz.
          </p>
        </div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">

      <!-- Mission Section -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white/90">
            Bizning Missiyamiz
          </h2>
          <p class="text-xl text-white/80 leading-relaxed">
            Har bir inson o'z hayotida eng yaxshi qarorlarni qabul qilishi kerak.
            Bizning maqsadimiz - sizga to'g'ri yo'lni ko'rsatish va
            <span class="text-white/95 font-semibold">muvaffaqiyatga erishishda</span> yordam berish.
          </p>
          <p class="text-xl text-white/80 leading-relaxed">
            Zamonaviy AI texnologiyalari yordamida biz sizga
            <span class="text-white/95 font-semibold">shaxsiy, aniq va foydali</span> maslahatlar beramiz.
          </p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-12 text-center shadow-lg border border-white/20">
          <div class="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-2xl mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg border border-white/30">
            AI
          </div>
          <h3 class="text-3xl font-bold text-white/90 mb-4">AI Texnologiyasi</h3>
          <p class="text-lg text-white/80">Eng zamonaviy sun'iy intellekt algoritmlari</p>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white/90">
            Bizning Jamoa
          </h2>
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            Tajribali mutaxassislar jamoasi sizga eng yaxshi xizmatni taqdim etadi
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl border border-white/30">
              <span class="text-white font-bold">👨‍💼</span>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-white/90">AI Mutaxassislari</h3>
            <p class="text-white/80 leading-relaxed">Sun'iy intellekt sohasidagi tajribali mutaxassislar</p>
          </div>

          <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl border border-white/30">
              <span class="text-white font-bold">👩‍💻</span>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-white/90">Dasturchilar</h3>
            <p class="text-white/80 leading-relaxed">Zamonaviy texnologiyalar bilan ishlaydigan dasturchilar</p>
          </div>

          <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl border border-white/30">
              <span class="text-white font-bold">👨‍🎓</span>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-white/90">Psixologlar</h3>
            <p class="text-white/80 leading-relaxed">Maslahat berish sohasidagi tajribali psixologlar</p>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16 shadow-lg">
        <h2 class="text-3xl font-bold text-center text-white/90 mb-12">
          Bizning Qadriyatlarimiz <span class="text-white/70">●</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl mx-auto mb-4 flex items-center justify-center border border-white/30">
              <span class="text-white font-bold text-xl">●</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white/90">Aniqlik</h3>
            <p class="text-white/80">Har bir maslahat aniq va amalga oshiriladigan bo'ladi</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl mx-auto mb-4 flex items-center justify-center border border-white/30">
              <span class="text-white font-bold text-xl">✓</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white/90">Xavfsizlik</h3>
            <p class="text-white/80">Shaxsiy ma'lumotlaringiz to'liq himoyalangan</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl mx-auto mb-4 flex items-center justify-center border border-white/30">
              <span class="text-white font-bold text-xl">⚡</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white/90">Tezlik</h3>
            <p class="text-white/80">Bir soniyada javob oling</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl mx-auto mb-4 flex items-center justify-center border border-white/30">
              <span class="text-white font-bold text-xl">♥</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white/90">G'amxo'rlik</h3>
            <p class="text-white/80">Har bir foydalanuvchi biz uchun muhim</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-white/10 backdrop-blur-xl text-white rounded-2xl p-8 text-center shadow-lg border border-white/20">
        <h2 class="text-3xl font-bold mb-6">Biz Bilan Bog'laning <span class="text-white/70">📞</span></h2>
        <p class="text-xl mb-8 text-white/80">
          Savollaringiz bormi? Bizga yozing va tez orada javob oling!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-8 rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg">
            Email Yuborish
          </button>
          <button class="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300">
            Telegram
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About page logic can be added here
</script>

<style scoped>
/* Additional styles if needed */
</style>
