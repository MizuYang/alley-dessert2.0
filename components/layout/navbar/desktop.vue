<script setup>
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
  search: {
    type: String,
    default: "",
  },
  favoriteData: {
    type: Array,
    default: [],
  },
  cartData: {
    type: Array,
    default: [],
  },
});

const { category, search, favoriteData, cartData } = toRefs(props);
</script>

<template>
  <ul
    class="text-primary mx-auto flex max-w-[1320px] items-center justify-center text-xl"
  >
    <li class="mr-auto hidden lg:block">
      <h1>
        <NuxtLink
          to="/"
          class="block p-1 transition-all duration-75 hover:scale-95 hover:opacity-90 active:scale-100"
        >
          <img
            src="/images/logos/logo.png"
            width="130"
            height="75"
            alt="小巷弄甜點logo"
          />
        </NuxtLink>
      </h1>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        主頁
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        :to="`/products/${category || '全部'}?search=${search}`"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        產品列表
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/questions"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        常見問題
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/about"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        關於我們
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/contact"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        聯絡我們
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/order"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        查詢訂單
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/favorite"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="nav-link collect border-primary relative block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        <template v-if="favoriteData.length">
          <i class="bi bi-heart-fill text-[30px] text-red-500" />

          <span
            class="bg-primary absolute -right-5 top-[10px] flex -translate-x-[25%] -translate-y-1/2 items-center justify-center rounded-full px-2 text-base font-bold text-red-500"
          >
            {{ favoriteData.length }}
          </span>
        </template>
        <template v-else>
          <i class="bi bi-heart collect_icon text-[30px]" />
        </template>
      </NuxtLink>
    </li>
    <li class="mb-5 mr-6 lg:mb-0">
      <NuxtLink
        to="/carts"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="nav-link collect border-primary relative block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
      >
        <i
          class="bi text-[30px]"
          :class="
            cartData.length
              ? 'bi-cart-check-fill text-red-500'
              : 'text-primary bi-cart4'
          "
        />

        <template v-if="cartData.length">
          <span
            class="bg-primary absolute -right-5 top-[10px] flex -translate-x-[25%] -translate-y-1/2 items-center justify-center rounded-full px-2 text-base font-bold text-red-600"
          >
            {{ cartData.length }}
          </span>
        </template>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
