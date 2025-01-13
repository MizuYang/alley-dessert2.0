<script setup>
const { cakeProducts, puddingProducts, profiteroleProducts } =
  storeToRefs(useProductStore());
</script>

<template>
  <div>
    <h3 class="text-primary pb-5 text-center text-[32px]">產品類別</h3>
    <div
      class="border-primary border-b border-t border-solid py-12 text-center"
    >
      <div class="mx-auto mb-14 grid max-w-[1200px] grid-cols-3 gap-20">
        <IndexProductSwiper
          title="蛋糕"
          :slidesPerView="1"
          :max-width="390"
          :products="cakeProducts"
        />
        <IndexProductSwiper
          title="布丁"
          :slidesPerView="1"
          :max-width="390"
          :products="puddingProducts"
        />
        <IndexProductSwiper
          title="泡芙"
          :slidesPerView="1"
          :max-width="390"
          :products="profiteroleProducts"
        />
      </div>
      <NuxtLink
        to="/products"
        class="text-primary border-primary hover:bg-primary/20 inline-block border border-solid px-3 py-3 text-2xl hover:scale-[1.01]"
        @click="currentPage('products')"
      >
        <i class="bi bi-shop"></i> 查看所有產品
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
