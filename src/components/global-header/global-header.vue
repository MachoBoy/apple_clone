<script setup>
import { navItem } from "./nav-item";
</script>

<template>
  <nav
    class="w-full h-[44px] fixed backdrop-saturate-[180%] backdrop-blur-[20px] bg-black/80 box-content z-50"
  >
    <div
      class="relative w-full max-w-[980px] px-[22px] flex justify-center items-center my-0 mx-auto box-content"
    >
      <ul class="w-full -mx-[8px] flex justify-between align-center">
        <li class="h-[44px] inline-block">
          <a
            class="px-[8px] block h-[44px] w-[15px] bg-[url('/src/assets/icons/apple-icon.svg')] bg-no-repeat bg-top opacity-100"
          ></a>
        </li>
        <li
          v-for="(nav, index) in navItem"
          :key="index"
          class="relative h-[44px] text-[#f5f5f7] text-xs flex items-center justify-center"
        >
          <a class="px-[8px]">{{ nav.name }}</a>
        </li>
        <li>
          <a
            class="px-[8px] block h-[44px] w-[15px] bg-[url('/src/assets/icons/search-icon.svg')] bg-no-repeat bg-top opacity-100"
          ></a>
        </li>
        <li>
          <a
            class="px-[8px] block h-[44px] w-[15px] bg-[url('/src/assets/icons/shopping-icon.svg')] bg-no-repeat bg-top opacity-100"
          ></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
