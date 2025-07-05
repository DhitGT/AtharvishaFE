<template>
  <div class="bg-[#101317] relative max-w-screen overflow-x-hidden">
    <LandingNavibar />
    <div class="bg-grid mt-18 min-h-full container mx-auto">
      <div class="flex mt-18 gap-1 flex-col items-start w-full">
        <div class="w-full">
          <MajorsHeroImage />
        </div>
        <span
          class="text-lg mt-16 w-full text-white md:text-3xl mb-4"
          style="text-align: center"
        >
          Akuntansi Dan Keuangan Lembaga
          <span class="font-bold glow text-cyan-300">(AKL 1)</span>
        </span>
        <div class="cat flex-wrap flex mt-6 max-w-2xl mx-auto items-center justify-center gap-3">
          <div
            @click.prevent="selectedCat = 'individual'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'individual'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Individual
              </span>
            </div>
          </div>
          <div
            @click.prevent="selectedCat = 'yearbook'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'yearbook'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Yearbook
              </span>
            </div>
          </div>
          <div
            @click.prevent="selectedCat = 'Kelompok'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'Kelompok'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Kelompok
              </span>
            </div>
          </div>
          <div
            @click.prevent="selectedCat = 'Putih Abu'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'Putih Abu'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Putih Abu
              </span>
            </div>
          </div>
        </div>
        <div class="w-full mt-16">
            <template v-if="selectedCat == 'individual'">
                <MajorsYearbookIndividual/>
            </template>
            <template v-if="selectedCat == 'yearbook'">
                <MajorsYearbookYearbook/>
            </template>
        </div>
      </div>
    </div>
    <LandingFoooter />
  </div>
</template>
<script setup>
const isMd = useBreakpoint("md");
const selectedCat = ref('individual')
definePageMeta({
  layout: "landing",
});
</script>
