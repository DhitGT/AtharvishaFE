<template>
  <div class="bg-[#101317] relative max-w-screen overflow-x-hidden">
      <LandingNavibar />
      <div class="bg-grid mt-18 min-h-full container mx-auto">
          <AboutHero />
          <AboutKepsek />
          <AboutDescription />
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
    </div>
    <LandingFoooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ReusableCircleGlow } from "#components";
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
