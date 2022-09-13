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
});
</script>
<template>
  <div class="relative w-full h-[692px]">
    <!-- product description -->
    <div class="w-full text-center relative z-10">
      <h2
        :class="[theme === 'dark' ? 'text-white' : 'text-black']"
        class="headline text-[56px]"
      >
        {{ props.headline }}
      </h2>
      <h3
        :class="[theme === 'dark' ? 'text-white' : 'text-black']"
        class="subhead text-[28px] mt-[6px] leading-[1.10] font-normal"
      >
        {{ props.subhead }}
      </h3>
      <p
        class="desc text-[#86868b] text-[21px] mt-[12px] font-normal"
        v-html="props.description"
      ></p>
      <div class="links mt-[0.5em] relative inline-block text-[21px]">
        <a
          class="text-[#2997ff] after:content-[url('/src/assets/icons/chevron_r-icon.svg')] after:pl-[0.3em] after:-pb-[2em] after:text-xs hover:underline"
          href="#"
          >Learn more</a
        >
        <a
          class="text-[#2997ff] ml-[35px] after:content-[url('/src/assets/icons/chevron_r-icon.svg')] after:pl-[0.3em] after:-pb-[2em] after:text-xs hover:underline"
          href="#"
          >Pre-order</a
        >
      </div>
    </div>
    <!-- product image -->
    <div class="absolute top-0 left-0 w-full h-full overflow-visible flex-grow">
      <figure
        :style="`background-image: url(${props.background})`"
        class="absolute bottom-0 left-[calc(50%+0px)] -translate-x-1/2 mx-auto w-[3008px] h-[736px] bg-no-repeat bg-[length:3008px_736px]"
      ></figure>
    </div>
  </div>
</template>
