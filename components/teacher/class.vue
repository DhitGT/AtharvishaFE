<template>
  <div class="flex flex-wrap mx-auto justify-center gap-y-12 gap-x-4 items-start w-[95vw] md:w-3xl">
    <div v-for="(people, index) in people" class="flex w-[10em] md:max-w-[10em] flex-col items-center">
      <div
        class="relative hover:scale-105 mb-2 transition-all bg-green-300 duration-200 cursor-pointer w-[10em] md:w-[10em] h-[15em] p-0.5 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-[#5C728E] to-[#20324B]"
      >
        <div
          class="bg-gradient-to-b h-full w-full rounded-bl-2xl rounded-tr-2xl from-[#1A2129] to-[#161B20] shadow-lg flex flex-col gap-3 items-center justify-start"
        >
          <img
            class="w-full h-[15em] object-cover rounded-tr-2xl rounded-bl-2xl"
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
        class="text-xs mt-2 text-[#ffffffe0] w-full"
        style="text-align: center"
      >
        {{ people.role }}
      </span>
    </div>
  </div>
</template>
<script setup>
const people = [
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  },
  {
    img: "https://placehold.co/200",
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet, M.Pd. ",
    role: "Lorem Ipsum Dolor Sit Amet ",
  }
  
];
</script>
