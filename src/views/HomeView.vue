<script setup>
import ProductFull from "../components/product-full/product-full.vue";
import ProductHalf from "../components/product-half/product-half.vue";
</script>

<template>
  <main class="block max-w-[2560px] mx-auto pt-[44px] box-content">
    <section class="w-full">
      <product-full
        theme="dark"
        headline="iPhone 14 Pro"
        subhead="Pro. Beyond."
        description="Available starting 9.16"
        background="/src/assets/images/iphone14_pro.jpg"
      />
      <product-full
        theme="light"
        headline="iPhone 14"
        subhead="Big and bigger"
        description="iPhone 14 available starting 9.16 <br/> iPhone 14 Plus available starting 10.7"
        background="/src/assets/images/iphone14.jpg"
      />
      <product-full
        theme="dark"
        headline="AirPods Pro"
        subhead="Rebuilt from the sound up"
        description="Available starting 9.23"
        background="/src/assets/images/airpods-pro.jpg"
      />
    </section>
    <section class="w-full flex flex-row">
      <div class="w-1/2 overflow-hidden">
        <ProductHalf
          theme="light"
          logo="/src/assets/images/apple_watch_ultra_logo.png"
          background="/src/assets/images/apple_watch_ultra.jpeg"
        />
      </div>
      <div class="w-1/2 overflow-hidden">
        <ProductHalf
          theme="light"
          logo="/src/assets/images/apple_watch_ultra_logo.png"
          background="/src/assets/images/apple_watch_ultra.jpeg"
        />
      </div>
    </section>
  </main>
</template>
