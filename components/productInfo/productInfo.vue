<script setup>
const props = defineProps({
  productInfoData: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
const { productInfoData } = toRefs(props);

const { addProductToCart } = useCartStore();

const qty = ref(1);
const isMouseDown = ref(false);
let timer = null;

async function updProductCount(type) {
  isMouseDown.value = true;

  updCount(type);

  // 長按超過 500ms 就連續增減
  await new Promise((resolve) => setTimeout(resolve, 500));

  timer = setInterval(() => {
    clearTimer();
    updCount(type);
  }, 50);
}
function clearTimer() {
  if (!isMouseDown.value) {
    clearTimeout(timer);
    timer = null;
    return;
  }
}
function updCount(type) {
  if (!isMouseDown.value) return;
  if (type === "+") qty.value++;
  else if (type === "-" && qty.value > 1) qty.value--;
}
async function addCart(product, count) {
  await addProductToCart({ product, qty: count });
  qty.value = 1;
}
</script>

<template>
  <div class="grid grid-cols-2 gap-x-28">
    <div>
      <img
        :src="productInfoData.imageUrl"
        class="block h-full w-full object-cover"
        :alt="`${productInfoData.title}`"
        :title="`${productInfoData.title}-${productInfoData.description}`"
      />
    </div>
    <div>
      <ul class="px-10 py-8">
        <li class="mb-4 flex items-center">
          <span class="text-2xl font-bold">類別：</span>
          <span
            class="bg-primary text-md inline-block rounded-md px-3 text-lg font-bold text-black"
          >
            {{ productInfoData.category }}
          </span>
          <span
            class="text-md ms-2 inline-block rounded-md bg-red-500 px-3 text-lg font-bold text-white"
            v-if="+productInfoData.popular === 3"
          >
            熱門商品
          </span>
        </li>
        <li class="mb-4 flex items-end">
          <span class="text-2xl font-bold">推薦程度：</span>
          <div>
            <i
              class="bi bi-heart-fill ms-2 inline-block text-xl"
              :class="idx <= +productInfoData.popular && 'text-red-500'"
              v-for="idx in 3"
              :key="`productInfo-heart-${idx}`"
            ></i>
          </div>
        </li>
        <li class="mb-5">
          <span class="text-2xl font-bold">產品描述：</span>
          <p class="text-xl leading-normal">
            {{ productInfoData.description }}
          </p>
        </li>
        <li class="mb-5 flex items-center">
          <p class="me-2 mt-1 text-lg text-gray-400 line-through">
            原價 {{ productInfoData.origin_price }} 元
          </p>
          <p class="ms-2 text-3xl font-black">
            <span class="text-red-500">{{ productInfoData.price }}</span> 元
          </p>
        </li>
        <li class="mb-5 flex">
          <button
            type="button"
            class="hover:bg-primary/20 active:bg-primary/25 border-primay border border-solid px-2 py-1 text-4xl"
            :class="{
              'cursor-not-allowed bg-gray-600 text-black': qty <= 1,
            }"
            @mousedown="updProductCount('-')"
            @mouseup="isMouseDown = false"
          >
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            type="number"
            class="border-primay w-full border border-solid bg-black text-center text-4xl focus:outline-none"
            min="1"
            readonly
            v-model="qty"
          />
          <button
            type="button"
            class="hover:bg-primary/20 active:bg-primary/25 border-primay border border-solid px-2 py-1 text-4xl"
            @mousedown="updProductCount('+')"
            @mouseup="isMouseDown = false"
          >
            <i class="bi bi-plus-lg"></i>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="m-auto block w-full bg-red-800 py-3 text-2xl hover:bg-red-700/90 active:bg-red-600/80"
            @click.stop="addCart(productInfoData, qty)"
          >
            <i class="bi bi-cart-check-fill"></i>
            加入購物車
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
