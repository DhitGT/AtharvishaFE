<template>
  <div class="w-full px-6 gap-3 flex-wrap overflow-x-scroll md:gap-4 justify-center items-center flex" style="scrollbar-width: none;">
    <div
      v-for="(item, index) in Button"
      @click.prevent="selectItem(item)"
      class="relative hover:scale-105 hover-box-glow transition-all duration-200 cursor-pointer max-w-xs p-0.5 rounded-md bg-gradient-to-b from-[#5C728E] to-[#20324B]"
    >
      <div
        :class="[
          selected?.Title == item?.Title
            ? 'bg-cyan-200 text-black'
            : 'bg-gradient-to-b from-[#1A2129] to-[#161B20] text-[#fff]',
        ]"
        class="py-1 h-full rounded-md px-6 shadow-lg flex flex-col gap-3 items-center justify-start"
      >
        <span class="text-xs md:text-sm" style="text-align: center">
          {{ item.Title }}
        </span>
      </div>
    </div>
  </div>
  <div class="flex w-full mt-8 ">
    <div class="w-full flex-col md:flex-row  flex max-w-5xl mx-auto">
      <div class="w-full md:w-1/5 mb-9 md:mb-0 flex flex-col items-center md:items-start">
        <div class="mb-4">
            <span
              class="text-lg w-full text-white md:text-md my-4"
              v-html="highlightedTitle"
            >
            </span>
        </div>

        <div class="bo-1 border-b-1 w-[8em] mb-6 border-white"></div>
        <button
          @click="$router.push(`/majors/${selected?.Title.toLowerCase()}`)"
          class="transition-all duration-150 hover:scale-105 cursor-pointer w-fit text-black text-xs bg-cyan-300 px-4 py-1 rounded"
        >
          View More
        </button>
      </div>
      <div class="w-[96%] ms-1 md:ms-0 md:w-[70%]">
        <div
          class="flex ps-8 gap-4 overflow-x-scroll"
          style="scrollbar-width: none"
        >
          <div
            v-for="(people, index) in people"
            class="flex flex-col items-center"
          >
            <div
              class="relative hover:scale-105 mb-2 transition-all duration-200 cursor-pointer w-[10em] h-[13em] max-w-xs p-0.5 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-[#5C728E] to-[#20324B]"
            >
              <div
                class="bg-gradient-to-b h-full rounded-bl-2xl rounded-tr-2xl from-[#1A2129] to-[#161B20] shadow-lg flex flex-col gap-3 items-center justify-start"
              >
                <img
                  class="w-full h-[13em] object-cover rounded-tr-2xl rounded-bl-2xl"
                  :src="people.img"
                />
              </div>
            </div>
            <p
              v-if="people.name"
              class="text-sm capitalized font-bold text-[#fff] w-full"
              style="text-align: center; text-transform: capitalize"
            >
              {{ people.name }}
            </p>
            <span
              v-if="people.text"
              class="text-xs mt-2 text-[#ffffffe0] w-full"
              style="text-align: center"
            >
              "{{ people.text }}"
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NuxtLink, Title } from "#components";
const selectedData = ref({});

const people = [
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor",
    text: "Loreme Ipsum Dolor Sit Amet",
  },
  {
    img: "https://placehold.co/200",
    id: 2,
    name: "Lorem Ipsum Dolor 2",
    text: "Loreme Ipsum Dolor Sit Amet",
  },
  {
    img: "https://placehold.co/200",
    id: 3,
    name: "Lorem Ipsum Dolor 3",
    text: "Loreme Ipsum Dolor Sit Amet",
  },
  {
    img: "https://placehold.co/200",
    id: 4,
    name: "Lorem Ipsum Dolor 4",
    text: "Loreme Ipsum Dolor Sit Amet",
  },
  {
    img: "https://placehold.co/200",
    id: 5,
    name: "Lorem Ipsum Dolor 5",
    text: "Loreme Ipsum Dolor Sit Amet",
  },
];

const highlightedTitle = computed(() => {
  const title = selected.value.Name || "";
  const words = title.trim().split(" ");
  const mid = Math.ceil(words.length / 2);

  const firstHalf = words.slice(0, mid).join(" ");
  const secondHalf = words.slice(mid).join(" ");

  return `${firstHalf} <span class="glow text-cyan-200 font-bold">${secondHalf}</span>`;
});

const Button = [
  {
    Title: "AKL",
    Name: "Akuntansi Dan Keuangan Lembaga",
    href: "#",
  },
  {
    Title: "RPL",
    Name: "rekayasa Perangkat Lunak",
    href: "#",
  },
  {
    Title: "TKJ",
    Name: "Teknik Komputer Dan Jaringan",
    href: "#",
  },

  {
    Title: "TBSM",
    Name: "Teknik Bisnis Dan Sepeda Motor",
    href: "#",
  },
  {
    Title: "TEI",
    Name: "Teknik Elektronika Industri",
    href: "#",
  },
  {
    Title: "TET",
    Name: "Teknik Energi Terbarukan",
    href: "#",
  },
];
const selected = ref(Button[0]);

function selectItem(item) {
  selected.value = item;
  //   selectedData.value = ;
}
</script>
