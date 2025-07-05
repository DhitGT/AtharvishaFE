<template>
  <div class="relative overflow-hidden h-screen w-screen">
    <ReusableCircleGlow
      :left="'50%'"
      class="z-10"
      :top="isMd ? '0%' : '-30%'"
    />
    <!-- Background Image -->
    <!-- <video
      src="/videos/teaser.mp4"
      poster="/images/atharvisha/all.JPG"
      preload="metadata"
      autoplay
      loop
      ref="bgVideo"
      playsinline
      class="h-full w-full object-cover pointer-events-none"
    >
      Your browser does not support the video tag.
    </video> -->

    <!-- Black overlay from top to bottom (black to transparent) -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#101317] to-transparent"
    ></div>
  </div>
</template>
<script setup>
const isMd = useBreakpoint("md");

const bgVideo = ref(null);

onMounted(() => {
  if (bgVideo.value) {
    bgVideo.value.volume = 0.1; // Set volume (0 = silent, 1 = full)
  }
});
</script>
