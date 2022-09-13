<script setup>
import { RouterView } from "vue-router";
import GlobalHeader from "./components/global-header/global-header.vue";
</script>

<template>
  <div class="w-full overflow-hidden">
    <global-header />
    <div class="pt-[44px]">
      <router-view></router-view>
    </div>
  </div>
</template>
