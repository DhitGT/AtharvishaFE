<template>
  <div class="bg-[#101317] relative max-w-screen overflow-x-hidden">
    <LandingNavibar />
    <div class="bg-grid mt-18 min-h-full container mx-auto">
      <div class="flex mt-18 gap-1 flex-col items-start w-full">
        <div class="w-full">
          <TeacherHero />
        </div>

        <div class="cat flex flex-wrap max-w-[90vw] mt-6 md:max-w-2xl mx-auto items-center justify-center gap-3">
          <div
            @click.prevent="selectedCat = 'all'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'all'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                All
              </span>
            </div>
          </div>
          <div
            @click.prevent="selectedCat = 'class'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'class'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Classroom Teacher
              </span>
            </div>
          </div>
          <div
            @click.prevent="selectedCat = 'management'"
            class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
          >
            <div
              :class="[
                selectedCat == 'management'
                  ? 'bg-cyan-200 text-black'
                  : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
              ]"
              class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
            >
              <span class="text-xs md:text-sm" style="text-align: center">
                Management Teacher
              </span>
            </div>
          </div>
          
        </div>
        <div class="w-full mt-16">
            <template v-if="selectedCat == 'all'">
                <TeacherAll/>
            </template>
            <template v-if="selectedCat == 'management'">
                <TeacherManagement/>
            </template>
            <template v-if="selectedCat == 'class'">
                <TeacherClass/>
            </template>
        </div>
      </div>
    </div>
    <LandingFoooter />
  </div>
</template>
<script setup>
const isMd = useBreakpoint("md");
const selectedCat = ref('all')
definePageMeta({
  layout: "landing",
});
</script>
