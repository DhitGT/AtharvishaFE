<template>
  <div
  :class="width ? `w-[${width}]` : 'max-w-md'"
    class="relative p-0.5  rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-[#5C728E] to-[#20324B]"
  >
    <div
      class="bg-gradient-to-b h-full rounded-bl-2xl rounded-tr-2xl from-[#1A2129] to-[#161B20] px-6 shadow-lg"
    >
      <p v-if="title" :class="`text-${titleTextSize} md:text-${titleMdTextSize}`" class="py-2 text-justify ">
        {{ title }}
      </p>
      <div v-html="text" :class="`text-${textSize} md:text-${mdTextSize}`" class="py-2 text-justify ">
  
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({

    width:{
        type:String,
        default : '1/2'
    },
    text:{
        type:String,
        default : 'Default Text Here'
    },
    textSize:{
        type:String,
        default : 'sm'
    },
    mdTextSize:{
        type:String,
        default : 'lg'
    },
    title:{
        type:String,
        default : ''
    },
    titleTextSize:{
        type:String,
        default : 'sm'
    },
    titleMdTextSize:{
        type:String,
        default : 'lg'
    }
})
</script>
