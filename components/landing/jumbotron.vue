<template>
  <div class="relative h-screen w-screen">
    <ReusableCircleGlow :left="'50%'" class="z-10" :top="isMd ? '0%' : '-20%'" />
    <!-- Background Image -->
    <img
      src="/static/img/jumbotron.png"
      class="h-full w-full object-cover"
      alt="Background"
    />

    <!-- Black overlay from top to bottom (black to transparent) -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#101317] to-transparent"
    ></div>
  </div>
</template>
<script setup>
const isMd = useBreakpoint('md')
</script>