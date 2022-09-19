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
    <section class="mt-3 w-full grid grid-cols-2 gap-3">
      <ProductHalf
        theme="light"
        logo="/src/assets/images/apple_watch_ultra_logo.png"
        :logoSize="{ height: '52px', bgSize: '137px 52px' }"
        background="/src/assets/images/apple_watch_ultra.jpeg"
        subhead="Adventure awaits"
        description="Available starting 9.23"
        :links="true"
      />

      <ProductHalf
        theme="dark"
        logo="/src/assets/images/apple_watch_series_8_logo.png"
        :logoSize="{ height: '52px', bgSize: '137px 52px' }"
        background="/src/assets/images/apple_watch_series_8.jpeg"
        subhead="A healthy leap ahead."
        description="Available starting 9.16"
        :links="true"
      />

      <ProductHalf
        theme="light"
        logo="/src/assets/images/fitness_plus_logo.png"
        :logoSize="{ height: '32px', bgSize: '173px 32px' }"
        background="/src/assets/images/apple-fitness-plus.jpeg"
        subhead="Fitness for everyone.<br/> Now all you need is iPhone."
        :links="true"
      />
      <ProductHalf
        theme="light"
        logo="/src/assets/images/apple_watch_se_logo.png"
        :logoSize="{ height: '49px', bgSize: '137px 49px' }"
        background="/src/assets/images/apple_watch_se.jpeg"
        subhead="A healthy leap ahead."
        description="Available starting 9.16"
        :links="true"
      />
      <ProductHalf
        theme="light"
        background="/src/assets/images/promo.jpeg"
        topHead="Offer ends 9.26"
        headline="Get supercharged for university or college with Apple."
        subhead="Last chance to get a gift card."
        :links="true"
      />
      <ProductHalf
        theme="light"
        logo="/src/assets/images/apple_tv_logo.png"
        :logoSize="{ height: '31px', bgSize: '80px 31px' }"
        background="/src/assets/images/blackbird.jpeg"
        :links="false"
      />
    </section>
  </main>
</template>
