<template>
  <div
    class="relative overflow-hidden w-full"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div
      class="flex items-center transition-transform md:h-auto h-50 duration-500 ease-in-out"
      :style="carouselStyle"
    >
      <!-- Left Spacer -->
      <div class="w-[10vw] flex-shrink-0"></div>
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-[80vw] flex-shrink-0  h-full  transition-all duration-300"
        @click="handleImageClick(index)"
      >
        <div
          :class="{
            'scale-100 md:scale-90  opacity-100': index === currentIndex,
            'scale-70 opacity-60 mb-8': index !== currentIndex,
            'ms-[-2em] md:ms-[-10vw]': index > currentIndex,
            'me-[-2em] md:me-[-10vw]': index < currentIndex,
          }"
          class="rounded-bl-2xl transition-all duration-300 rounded-tr-2xl"
        >
          <div
            class="relative p-0.5 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <img
              :src="image"
              alt="Carousel Image"
              class="w-full h-full transition-all duration-400 object-cover rounded-bl-2xl rounded-tr-2xl shadow cursor-pointer"
            />
          </div>
        </div>
      </div>

      <!-- Right Spacer -->
      <div class="w-[10vw] flex-shrink-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-1.png",
];

const currentIndex = ref(0);

const handleImageClick = (index) => {
  if (index !== currentIndex.value) {
    currentIndex.value = index;
  }
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

// Swipe Logic
const touchStartX = ref(0);

const onTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const onTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX.value;

  if (Math.abs(diff) > 50) {
    if (diff < 0) next(); // Swipe left
    else prev(); // Swipe right
  }
};

const carouselStyle = computed(() => {
  const slideWidth = 80; // vw
  const offset = currentIndex.value * slideWidth;
  return `transform: translateX(-${offset}vw)`;
});
</script>

<style scoped>
img {
  transition: all 0.4s ease;
}
</style>
