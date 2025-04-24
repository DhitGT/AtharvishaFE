<template>
  <div class="w-screen">
    <nav
      class="bg-transparent border-b border-white/30 fixed top-0 w-screen backdrop-blur-2xl z-[99]"
    >
      <div
        class="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between md:justify-evenly p-4"
      >
        <!-- Brand -->
        <div class="flex items-center">
          <h1 class="text-xl font-black uppercase glow">
            <span class="text-white">ATHAR</span>
            <span class="text-[#A6EFFF]">VISHA</span>
          </h1>
        </div>

        <!-- Hamburger -->
        <button @click="menuOpen = !menuOpen" class="text-white md:hidden">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Menu -->
        <div
          :class="menuOpen ? 'block' : 'hidden'"
          class="w-full md:flex md:items-center md:justify-between md:w-auto"
        >
          <ul
            class="flex flex-col text-center gap-4 md:gap-0 md:flex-row md:space-x-4 mt-4 md:mt-0"
          >
            <li>
              <NuxtLink
                to="/"
                :class="[
                  $route.path === '/'
                    ? 'text-[#A6EFFF] font-bold border-b-2 border-[#A6EFFF] pb-1'
                    : 'text-gray-100',
                  'md:px-2 hover:text-cyan-500 transition-colors',
                ]"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                :class="[
                  $route.path === '/about'
                    ? 'text-[#A6EFFF] font-bold border-b-2 border-[#A6EFFF] pb-1'
                    : 'text-gray-100',
                  'md:px-2 hover:text-cyan-500 transition-colors',
                ]"
                >About</NuxtLink
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-100 md:px-2 hover:text-cyan-500 transition-colors"
                >Majors</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-100 md:px-2 hover:text-cyan-500 transition-colors"
                >Teacher's</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-100 md:px-2 hover:text-cyan-500 transition-colors"
                >Memories</a
              >
            </li>
          </ul>

          <div
            :class="menuOpen ? 'flex' : 'hidden'"
            class="w-full md:flex-row mx-auto gap-4 items-center md:items-center md:space-x-4 mt-4 md:mt-0"
          >
            <button
              class="bg-[#A6EFFF] text-gray-900 font-semibold py-2 px-5 rounded hover:bg-cyan-400 w-full md:w-auto md:mt-0"
            >
              Login
            </button>
          </div>
        </div>
        <div
          class="md:flex hidden flex-col md:flex-row items-start md:items-center md:space-x-4 mt-4 md:mt-0"
        >
          <button
            class="bg-[#A6EFFF] text-gray-900 font-semibold py-2 px-5 rounded hover:bg-cyan-400 w-full md:w-auto mt-2 md:mt-0"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
.glow {
  text-shadow: 0 0 0px #00d0ff, 0 0 0px #00d0ff, 0 0 0px #00d0ff,
    0 0 40px #00d0ff;
}
</style>
