<template>
  <div class="container mx-auto w-full">
    <div
      class="max-w-3xl hidden md:grid mx-auto  grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-[600px]"
    >
      <!-- Box 1 -->
      <div
        class="col-span-1 md:col-span-2 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/600x400?text=1')] bg-cover bg-center  shadow"
      ></div> 

      <!-- Box 2 -->
      <div
        class="col-start-1 md:col-start-3 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x200?text=2')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 3 -->
      <div
        class="col-start-1 md:col-start-4 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x200?text=3')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 4 -->
      <div
        class="col-start-1 md:col-start-1 row-start-2 row-span-2 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x400?text=4')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 5 -->
      <div
        class="col-start-1 md:col-start-2 row-start-2 row-span-2 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x400?text=5')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 6 -->
      <div
        class="col-span-1 md:col-span-2 row-start-2 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/600x200?text=6')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 7 -->
      <div
        class="col-start-1 md:col-start-3 row-start-3 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x200?text=7')] bg-cover bg-center  shadow"
      ></div>

      <!-- Box 8 -->
      <div
        class="col-start-1 md:col-start-4 row-start-3 rounded-tr-2xl rounded-bl-2xl bg-[url('https://placehold.co/300x200?text=8')] bg-cover bg-center  shadow"
      ></div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static layout
const image = [
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
  'https://placehold.co/300x200',
]
</script>
