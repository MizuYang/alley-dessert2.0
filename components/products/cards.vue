<script setup>
import { storeToRefs } from "pinia";
import { useFavoriteStore } from "~/stores/favoriteStore.client.js";
const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: [],
  },
});

const router = useRouter();

const { favoritedPproductKeyName } = storeToRefs(useFavoriteStore());
const { toggleFavorite, favoriteInit } = useFavoriteStore();

const { getProductInfo } = useProductInfoStore();

onMounted(() => {
  if (import.meta.client) {
    favoriteInit();
  }
});

function gotoProductDetail(product = { id: "" }) {
  const { id } = product;
  if (!id) return;
  getProductInfo(product);
  router.push(`/productInfo/${id}`);
}
function addToCart() {
  console.log("addToCart");
}
</script>

<template>
  <ul class="mx-auto grid max-w-[1200px] grid-cols-4 gap-7">
    <li
      v-for="product in products"
      :key="`procust-card-${product.id}`"
      @click="gotoProductDetail(product)"
    >
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
          <div
            class="absolute right-0 top-0 rounded-bl-2xl bg-red-800/30 px-2 py-1"
          >
            <button
              data-clickType="btn"
              type="button"
              class="badge animation_hover collect_btn"
              title="加入收藏"
              @click.stop="toggleFavorite(product)"
            >
              <i
                class="bi bi-heart-fill text-primary inline-block text-2xl hover:scale-[1.15] hover:text-red-500 active:scale-[1.25] active:text-red-500/80"
                :class="
                  favoritedPproductKeyName[product.id]
                    ? 'text-red-500'
                    : 'text-primary'
                "
              ></i>

              <div
                class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <i
                  class="bi bi-heart-fill heart hidden text-red-500"
                  :class="`heart-full-${product.id}`"
                ></i>
                <i
                  class="bi bi-heartbreak-fill heartbreak hidden text-red-500"
                  :class="`heart-break-${product.id}`"
                ></i>
              </div>
            </button>
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
          @click.stop="addToCart(product)"
        >
          <i class="bi bi-cart-check-fill"></i>
          加入購物車
        </button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.heart-full-animation {
  animation: heart-big 1s ease-in-out;
}

@keyframes heart-big {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(5);
  }
  100% {
    opacity: 0;
    display: none;
  }
}
.heart-break-animation {
  animation: heart-break 1s ease-in-out;
}

@keyframes heart-break {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(5);
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
