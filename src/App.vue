<script setup>
import { RouterView } from "vue-router";
import GlobalHeader from "./components/global-header/global-header.vue";
</script>

<template>
  <div class="w-full overflow-hidden">
    <global-header />
    <router-view></router-view>
  </div>
</template>
