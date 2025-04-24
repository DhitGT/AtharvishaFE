<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
  script.onload = () => {
    window.AOS.init({
      duration: 1500,
      once: false,
    });
  };
  document.head.appendChild(script);
});
</script>
<style>
@import 'https://unpkg.com/aos@2.3.4/dist/aos.css';
</style>