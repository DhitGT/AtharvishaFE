<template>
  <div class="container mx-auto px-4">
    <div
      class="flex items-center  md:max-w-full max-w-[90vw] overflow-x-scroll overflow-y-hidden h-full py-9 justify-start md:pjustify-center gap-4"
      style="scrollbar-width: none"
    >
      <template v-for="(major, index) in Majors">
        <MajorsCardMajor
          @click="$router.push(`/majors/${major?.name.toLowerCase()}`)"
          data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)"
          :title="major.title"
          :img="major.src"
          title-md-text-size="sm"
          title-text-size="xs"
          width="[3em]"
        />
      </template>
    </div>
  </div>
</template>
<script setup>
import { Title } from "#components";

const Majors = [
  {
    title: "Akuntansi Dan Keuangan Lembaga",
    name: "AKL",
    src: "/images/logo/AKL.svg",
  },
  {
    title: "Rekayasa Perangkat Lunak",
    name: "RPL",
    src: "/images/logo/RPL.svg",
  },
  {
    title: "teknik Komputer Dan Jaringan",
    name: "TKJ",
    src: "/images/logo/TKJ.svg",
  },
  {
    title: "Teknik Bisnis Sepeda Motor",
    name: "TBSM",
    src: "/images/logo/TBSM.svg",
  },
  {
    title: "Teknik elektronika Industri",
    name: "TEI",
    src: "/images/logo/TEI.svg",
  },
  {
    title: "Teknik Energi Terbarukan",
    name: "TET",
    src: "/images/logo/TET.svg",
  },
];
</script>
