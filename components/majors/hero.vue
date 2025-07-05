<template>
  <section
    class="flex flex-col overflow-hidden container mx-auto items-center justify-center"
  >
    <ReusableCircleGlowXl :top="topGlow" :left="'50%'" />
    <div
      class="relative flex flex-col z-30 w-full max-h-screen items-center rounded-full p-10"
    >
      <img
        src="/static/svg/MaskEclipse.svg"
        class="min-w-[100vw] md:min-w-auto md:w-[70%] mt-16 h-auto relative"
      />
      <div class="absolute top-50 md:top-70 max-w-full text-center">
        <h2 class="text-3xl text-white mb-4">Majors</h2>
        <p
          class="text-center text-sm max-w-xs md:max-w-xl md:text-base text-gray-300 mb-6"
        >
          Explore the diverse majors that shaped our skills and passions
          throughout our years at SMKN 2 Kota Bekasi. Each path, a unique
          journey of growth
        </p>
        <button
          class="bg-gradient-to-b gap-4 mx-auto from-[#1A2129] to-[#161B20] flex items-center border-2 border-gray-700 text-white py-1 px-6 rounded transition duration-300"
        >
          Learn More
          <span
            class="material-symbols-outlined font-bold text-cyan-300"
            style="font-size: 22px"
            >arrow_downward</span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const topGlow = ref("10%");

onMounted(() => {
  setTimeout(() => {
    topGlow.value = "7%";
  }, 1000);
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
