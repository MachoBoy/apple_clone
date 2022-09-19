<script setup>
const props = defineProps({
  theme: {
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
  logoSize: {
    type: Object,
  },
  topHead: {
    type: String,
  },
  headline: {
    type: String,
  },
  links: {
    type: Boolean,
  },
});
// const { theme, subhead, description, background, logo, logoSize, topHead, headline} = defineProps<{theme: string, subhead: string, }>
</script>

<template>
  <div class="overflow-hidden relative w-full h-[580px]">
    <!-- product description -->
    <div
      :style="[props.logo ? 'paddingTop: 59px' : 'paddingTop: 29px']"
      class="w-full text-center relative z-10"
    >
      <div
        v-if="props.logo"
        :style="{
          backgroundImage: `url(${props.logo})`,
          height: `${props.logoSize.height}`,
          backgroundSize: `${props.logoSize.bgSize}`,
        }"
        class="w-[88%] max-w-[430px] bg-no-repeat bg-center mx-auto"
      ></div>
      <h6 v-else class="text-sm text-[#ca2166] font-semibold">
        {{ props.topHead }}
      </h6>
      <h4
        v-if="props.headline"
        class="w-full max-w-[590px] mx-auto pt-[15px] italic font-semibold text-[40px] text-center leading-[1.1] tracking-normal shrink"
      >
        {{ props.headline }}
      </h4>
      <h4
        :class="[theme === 'dark' ? 'text-white' : 'text-[#1d1d1f]']"
        class="text-[21px] mt-[10px] mx-auto text-center"
        v-html="props.subhead"
      ></h4>
      <p
        v-if="props.description"
        class="text-[#86868b] text-[17px] mt-[6px] font-normal"
      >
        {{ props.description }}
      </p>
      <div
        v-if="props.links"
        class="links mt-[0.45em] relative inline-block text-[17px]"
      >
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
        class="absolute bottom-0 left-[calc(50%+0px)] -translate-x-1/2 mx-auto w-[1262px] h-[580px] bg-no-repeat bg-[length:1262px_580px]"
      ></figure>
    </div>
  </div>
</template>
