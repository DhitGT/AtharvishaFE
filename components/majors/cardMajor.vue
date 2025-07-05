<template>
  <div
    class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer min-w-[10em] md:w-[10em] h-[13em] max-w-xs p-0.5 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-[#5C728E] to-[#20324B]"
  >
    <div
      class="bg-gradient-to-b py-8 h-full rounded-bl-2xl rounded-tr-2xl from-[#1A2129] to-[#161B20] px-3 shadow-lg flex flex-col gap-3 items-center justify-start"
    >
      <img class="h-[60px]" :src="img"/>
      <span
        v-if="title"
        :class="`text-${titleTextSize}  md:text-${titleMdTextSize}`"
        class="text-[#fff]"
        style="text-align: center;"
      >
        {{ title }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: "1/2",
  },
  img: {
    type: String,
    default: "https://placehold.co/300",
  },
  text: {
    type: String,
    default: "Default Text Here",
  },
  textSize: {
    type: String,
    default: "sm",
  },
  mdTextSize: {
    type: String,
    default: "xs",
  },
  title: {
    type: String,
    default: "",
  },
  titleTextSize: {
    type: String,
    default: "sm",
  },
  titleMdTextSize: {
    type: String,
    default: "lg",
  },
});
</script>
