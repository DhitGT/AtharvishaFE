<template>
  <div class="bg-[#101317] relative max-w-screen overflow-x-hidden">
    <LandingNavibar />
    <div class="bg-grid mt-18 min-h-full container mx-auto">
      <ReusableCircleGlowXl :top="'22%'" :left="isMd ? '0' : '-40%'" />
      <ReusableCircleGlowXl
        :color="'red'"
        :top="isMd ? '58%' : '46%'"
        :left="isMd ? '100%' : '110%'"
      />
      <ReusableCircleGlowXl
        :color="'cyan'"
        :top="isMd ? '73%' : '60%'"
        :left="isMd ? '0%' : '-10%'"
      />
      <ReusableCircleGlowXl
        :color="'red'"
        :top="isMd ? '90%' : '90%'"
        :left="isMd ? '100%' : '110%'"
      />
      <div class="flex mt-18 gap-1 flex-col items-start w-full">
        <div class="w-full">
          <MajorsHeroImage />
        </div>
        <span
          class="text-lg mt-16 w-full text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          Akuntansi Dan Keuangan Lembaga
          <span class="font-bold glow text-cyan-300">(AKL)</span>
        </span>
        <div
          class="flex items-center flex-wrap justify-center gap-x-10 gap-y-10 min-w-full px-6 max-w-2xl"
        >
          <div
            @click="$router.push(`/majors/${$route.params?.major}/yearbook/1`)"
            class="flex flex-col w-[85vw] md:w-[35vw]"
          >
            <img
              src="/static/img/jumbotron.png"
              class="h-full w-full object-cover rounded-tr-2xl rounded-bl-2xl"
              alt="Background"
            />
            <span class="text-white w-full mt-3 text-center">
              Akuntansi Dan Keuangan Lembaga 1
            </span>
            <p class="text-white opacity-50 w-full text-center">
              @_exaccone19_
            </p>
          </div>
          <div
            @click="$router.push(`/majors/${$route.params?.major}/yearbook/1`)"
            class="flex flex-col w-[85vw] md:w-[35vw]"
          >
            <img
              src="/static/img/jumbotron.png"
              class="h-full w-full object-cover rounded-tr-2xl rounded-bl-2xl"
              alt="Background"
            />
            <span class="text-white w-full mt-3 text-center">
              Akuntansi Dan Keuangan Lembaga 1
            </span>
            <p class="text-white opacity-50 w-full text-center">
              @_exaccone19_
            </p>
          </div>
          <div
            @click="$router.push(`/majors/${$route.params?.major}/yearbook/1`)"
            class="flex flex-col w-[85vw] md:w-[35vw]"
          >
            <img
              src="/static/img/jumbotron.png"
              class="h-full w-full object-cover rounded-tr-2xl rounded-bl-2xl"
              alt="Background"
            />
            <span class="text-white w-full mt-3 text-center">
              Akuntansi Dan Keuangan Lembaga 1
            </span>
            <p class="text-white opacity-50 w-full text-center">
              @_exaccone19_
            </p>
          </div>
        </div>
      </div>
    </div>
    <LandingFoooter />
  </div>
</template>
<script setup>
const isMd = useBreakpoint("md");
definePageMeta({
  layout: "landing",
});
</script>
