<script setup>
const props = defineProps({
  theme: {
    type: String,
  },
  headline: {
    type: String,
  },
  subhead: {
    type: String,
  },
  description: {
    type: String,
  },
  background: {
    type: String,
  },
  logo: {
    type: String,
  },
});
</script>

<template>
  <div class="relative w-full h-[580px]">
    <!-- product description -->
    <div class="w-full text-center relative z-10 pt-[59px]">
      <div
        :style="`background-image: url(${props.logo})`"
        class="w-[88%] max-w-[430px] h-[52px] bg-no-repeat bg-[length:137px_52px] bg-center mx-auto"
      ></div>
    </div>
    <!-- product image -->
    <div class="absolute top-0 left-0 w-full h-full overflow-visible flex-grow">
      <figure
        :style="`background-image: url(${props.background})`"
        class="absolute bottom-0 left-[calc(50%+0px)] -translate-x-1/2 mx-auto w-[1262px] h-[580px] bg-no-repeat bg-[length:1262px_580px]"
      ></figure>
    </div>
  </div>
</template>
