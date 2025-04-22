<template>
    <div  class="bg-[#101317]   max-w-screen overflow-x-hidden">
        <div class="bg-grid ">
            <LandingNavibar />
            <div class="flex flex-col gap-28 md:gap-36  w-screen relative overflow-x-hidden" >
                <LandingJumbotron />
                <ReusableCircleGlow :top="'22%'" :left="isMd ? '0' : '-40%'" />
                <LandingPhotosCollections class="z-20"/>
                <LandingSlogan class="z-20"/>
                <LandingImageCarousel class="z-20"/>
                <ReusableCircleGlow :color="'red'" :top="isMd ? '58%' : '46%' " :left="isMd ? '100%' : '110%' " />
                <ReusableCircleGlow :color="'cyan'" :top="isMd ? '73%' : '60%' " :left="isMd ? '0%' : '-10%' " />
                <ReusableCircleGlow :color="'red'" :top="isMd ? '90%' : '90%' " :left="isMd ? '100%' : '110%' " />
                <LandingWords class="z-20"/>
                <LandingLegacyNumbers class="z-20"/>
            </div>
            <LandingFoooter/>
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