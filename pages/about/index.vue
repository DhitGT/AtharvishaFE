<template>
    <div  class="bg-[#101317] max-w-screen overflow-x-hidden">
        <LandingNavibar />
        <div class="bg-grid mt-18 min-h-full">
            <AboutHero />
            <AboutKepsek/>
        </div>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
const isMd = useBreakpoint('md')
definePageMeta({
  layout: 'landing' 
})


// onMounted(() => {
//   Scrollbar.init(document.querySelector('#scroll-container'), {
//     damping: 0.04,
//     renderByPixels: true,
//     continuousScrolling: false
//   })
// })
</script>