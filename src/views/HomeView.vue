<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-white/30 shadow-lg">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-white/90">AI Online - 24/7 Xizmat</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
              Maslahatchi AI
            </span>
            <br>
            <span class="text-2xl sm:text-3xl md:text-4xl text-white/80">ga Xush Kelibsiz!</span>
          </h1>

          <p class="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sun'iy intellekt yordamida eng yaxshi maslahatlarni oling.
            <span class="text-white/95 font-semibold">Har qanday savolingizga</span> javob toping va
            <span class="text-white/95 font-semibold">hayotingizni yaxshilang</span>.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              @click="$router.push({ name: 'maslahatlar' })"
              class="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-8 rounded-2xl text-lg border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Maslahat Olish
            </button>

            <button
              @click="$router.push({ name: 'pro' })"
              class="bg-white/10 backdrop-blur-xl text-white/90 font-semibold py-3 px-8 rounded-2xl text-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Pro Rejimga O'tish
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                <span class="text-xs font-bold text-white">✓</span>
              </div>
              <span class="text-sm font-medium">100% Xavfsiz</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                <span class="text-xs font-bold text-white">⚡</span>
              </div>
              <span class="text-sm font-medium">Tez Javob</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                <span class="text-xs font-bold text-white">●</span>
              </div>
              <span class="text-sm font-medium">Aniq Maslahat</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative z-10 container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-white/90">
          Nima uchun bizni tanlash kerak?
        </h2>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Bizning AI texnologiyamiz sizga eng yaxshi tajribani taqdim etadi
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 border border-white/30">
            <span class="text-white font-bold">⚡</span>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-white/90">Tez Javob</h3>
          <p class="text-white/80 leading-relaxed">Bir soniyada eng yaxshi maslahatlarni oling. AI texnologiyasi yordamida darhol javob oling.</p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 border border-white/30">
            <span class="text-white font-bold">●</span>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-white/90">Aniq Maslahat</h3>
          <p class="text-white/80 leading-relaxed">Sizning vaziyatingizga mos, shaxsiylashtirilgan maslahatlar. Har bir tavsiya siz uchun maxsus.</p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 border border-white/30">
            <span class="text-white font-bold">✓</span>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-white/90">100% Xavfsiz</h3>
          <p class="text-white/80 leading-relaxed">Shaxsiy ma'lumotlaringiz to'liq himoyalangan. Eng yuqori darajadagi xavfsizlik standartlari.</p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="relative z-10 bg-white/10 backdrop-blur-xl border-t border-white/20">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white/90 mb-6">
            Bizning Natijalarimiz
          </h2>
          <p class="text-lg text-white/80 max-w-2xl mx-auto">
            Raqamlar gapirsin - bizning muvaffaqiyatimiz sizning qoniqishingizda
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="group">
            <div class="text-4xl sm:text-5xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-200">1000+</div>
            <div class="text-white/70 text-sm sm:text-base font-medium">Maslahat Berildi</div>
          </div>

          <div class="group">
            <div class="text-4xl sm:text-5xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors duration-200">500+</div>
            <div class="text-white/70 text-sm sm:text-base font-medium">Mamnun Mijozlar</div>
          </div>

          <div class="group">
            <div class="text-4xl sm:text-5xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors duration-200">24/7</div>
            <div class="text-white/70 text-sm sm:text-base font-medium">Qo'llab-quvvatlash</div>
          </div>

          <div class="group">
            <div class="text-4xl sm:text-5xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-200">99%</div>
            <div class="text-white/70 text-sm sm:text-base font-medium">Muvaffaqiyat Darajasi</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Home page logic can be added here
</script>

<style scoped>
/* Additional styles if needed */
</style>
