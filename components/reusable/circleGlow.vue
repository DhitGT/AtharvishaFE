<template>
  <div
    class="absolute transform z-[2] -translate-x-1/2 rounded-full blur-[100px] opacity-40"
    :class="[bgColorClass, sizeClass]"
    :style="computedStyle"
  ></div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  top: { type: String, default: '0px' },
  left: { type: String, default: '50%' },
  w: { type: String, default: '308px' },
  h: { type: String, default: '308px' },
  color: {
    type: String,
    default: 'cyan',
    validator: (val) =>
      ['cyan', 'red', 'blue', 'green', 'pink', 'purple', 'amber', 'lime'].includes(val),
  },
})

const sizeClass = computed(() => {
  return {
    [`w-[${props.w}]`]: true,
    [`h-[${props.h}]`]: true,
  }
})

const computedStyle = computed(() => ({
  top: props.top,
  left: props.left,
}))

const bgColorClass = computed(() => {
  return {
    'bg-cyan-400': props.color === 'cyan',
    'bg-red-400': props.color === 'red',
    'bg-blue-400': props.color === 'blue',
    'bg-green-400': props.color === 'green',
    'bg-pink-400': props.color === 'pink',
    'bg-purple-400': props.color === 'purple',
    'bg-amber-400': props.color === 'amber',
    'bg-lime-400': props.color === 'lime',
  }
})
</script>
