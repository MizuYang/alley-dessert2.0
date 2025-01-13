<script setup>
const { cakeProducts, puddingProducts, profiteroleProducts } =
  storeToRefs(useProductStore());
</script>

<template>
  <div>
    <h3 class="text-primary pb-12 text-center text-[32px]">產品類別</h3>
    <div class="border-primary border-b border-t border-solid py-12">
      <div class="mx-auto grid max-w-[1200px] grid-cols-3 gap-20">

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
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
