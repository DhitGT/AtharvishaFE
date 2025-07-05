<template>
  <div class="bg-[#101317] relative max-w-screen overflow-x-hidden">
    <LandingNavibar />
    <div class="bg-grid mt-18 min-h-full container mx-auto">
      <ReusableCircleGlowXl :top="'22%'" :left="isMd ? '0' : '-40%'" />
      <ReusableCircleGlowXl
        :color="'red'"
        :top="isMd ? '58%' : '46%'"
        :left="isMd ? '100%' : '110%'"
      />
      <ReusableCircleGlowXl
        :color="'cyan'"
        :top="isMd ? '73%' : '60%'"
        :left="isMd ? '0%' : '-10%'"
      />
      <ReusableCircleGlowXl
        :color="'red'"
        :top="isMd ? '90%' : '90%'"
        :left="isMd ? '100%' : '110%'"
      />
      <MajorsHero />
      <div class="flex md:mt-18 gap-1 flex-col items-start w-full">
        <span
          class="text-lg w-full text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          All Majors Of
          <span class="font-bold glow text-cyan-300">Boetoen</span>
        </span>
        <MajorsAllMajors />
      </div>
      <div class="flex mt-16 md:mt-38 gap-4 flex-col items-start w-full">
        <span
          class="text-lg w-full text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          Discover the
          <span class="font-bold glow text-cyan-300">Highlight</span>
        </span>
        <MajorsDiscover />
      </div>
      <div class="flex mt-38 gap-4 flex-col items-start w-full">
        <span
          class="text-lg w-full text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          Yearbook
          <span class="font-bold glow text-cyan-300">Design Photos</span>
        </span>
        <MajorsYbPhotos />
      </div>
      <div class="flex mt-38 gap-4 flex-col items-start w-full">
        <span
          class="text-lg w-full hidden md:block text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          Highlight
          <span class="font-bold glow text-cyan-300">Yearbook Photos</span>
        </span>
        <MajorsYbHighlight />
      </div>
    </div>
    <LandingFoooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const isMd = useBreakpoint("md");
definePageMeta({
  layout: "landing",
});

// onMounted(() => {
//   Scrollbar.init(document.querySelector('#scroll-container'), {
//     damping: 0.04,
//     renderByPixels: true,
//     continuousScrolling: false
//   })
// })
</script>
