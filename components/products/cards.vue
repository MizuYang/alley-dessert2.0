<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<template>
  <ul class="mx-auto grid max-w-[1200px] grid-cols-4 gap-7">
    <li v-for="product in products" :key="`procust-card-${product.id}`">
      <div
        class="border-primary hover:bg-primary/10 group flex h-full cursor-pointer flex-col border border-solid hover:ring-4 hover:ring-gray-400/50"
        data-aos="fade-up"
        aos-delay="1000"
        data-aos-once="true"
      >
        <div class="relative">
          <img
            :src="product.imageUrl"
            class="block h-[240px] w-[300px] object-cover object-center"
            :alt="product.title"
          />
          <!-- hover:遮罩 -->
          <div
            class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"
          ></div>
          <img
            class="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 group-hover:opacity-100"
            alt="顯示產品細節"
            src="/images/other/product_info.png"
          />

          <!-- 類別名稱 -->
          <div
            class="text-primary absolute left-0 top-0 rounded-br-2xl bg-red-800/70 p-2 font-bold"
          >
            <p>{{ product.category }}</p>
          </div>

          <!-- 收藏按鈕 -->
          <div class="absolute right-0 top-0 bg-red-800/30 rounded-bl-2xl px-2 py-1">
            <button
              data-clickType="btn"
              type="button"
              class="badge animation_hover collect_btn"
              :class="`collect_btn${index}`"
              title="加入收藏"
              @click.prevent="toggleCollect(product.id, index)"
            >
              <!-- <span v-if="collect.includes(product.id)">
                <i
                  class="bi bi-heart-fill text-2xl text-red-500"
                  data-clickType="btn"
                ></i>
              </span>
              <i class="bi bi-heart-fill text-2xl text-red-500" v-else data-clickType="btn"></i> -->
              <!-- <i class="bi bi-heart-fill text-2xl text-red-500" data-clickType="btn"></i> -->
              <i class="bi bi-heart-fill text-2xl text-primary hover:text-red-500" data-clickType="btn"></i>
            </button>
            <!-- //* 收藏愛心特效 -->
            <!-- <i class="bi bi-heart-fill heart" :class="`heart${index}`"></i>
            <i
              class="bi bi-heartbreak-fill heartbreak"
              :class="`heartbreak${index}`"
            ></i> -->
          </div>
        </div>

        <div class="flex-grow p-4 pb-0">
          <h3
            class="mb-3 flex items-center justify-between group-hover:font-black"
          >
            <span class="inline-block text-[28px] underline">
              {{ product.title }}</span
            >
            <span
              v-if="product.popular > 2"
              class="inline-block bg-red-600 p-1 text-sm font-semibold text-white"
              >熱門</span
            >
          </h3>
          <p class="mb-3 line-clamp-3 text-xl">{{ product.description }}</p>
        </div>
        <p class="flex justify-between px-4 pb-1 pt-0 text-xl">
          <span class="text-xl text-gray-300 line-through"
            >原價 ${{ product.origin_price }}</span
          >
          <strong>
            <span class="text-[32px] font-black text-red-500">{{
              product.price
            }}</span>
            元
          </strong>
        </p>
        <button
          type="button"
          class="m-auto block w-full bg-red-800 py-3 text-2xl group-hover:bg-red-700/90 group-active:bg-red-600/80"
        >
          <i class="bi bi-cart-check-fill"></i>
          加入購物車
        </button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
