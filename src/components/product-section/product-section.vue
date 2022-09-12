<script setup></script>
<template>
  <div class="relative w-full h-[692px]">
    <!-- product description -->
    <div class="w-full text-center pt-[55px] relative z-10">
      <h2 class="headline text-white text-[56px]">iPhone 14 Pro</h2>
      <h3
        class="subhead text-white text-[28px] mt-[6px] leading-[1.10] font-normal"
      >
        Pro. Beyond.
      </h3>
      <p class="desc text-[#86868b] text-[21px] mt-[12px] font-normal">
        Available starting 9.16
      </p>
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
        class="absolute left-[calc(50%+0px)] -translate-x-1/2 mx-auto w-[3008px] h-[736px] bg-no-repeat bg-[url('/src/assets/images/iphone14_pro.jpg')] bg-[length:3008px_736px]"
      ></figure>
    </div>
  </div>
</template>
