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
  cartData: {
    type: Array,
    default: [],
  },
});

const { category, search, cartData } = toRefs(props);

const { toggleNavbar } = useNavbarStore();
</script>

<template>
  <ul class="text-primary flex items-center justify-around py-2 text-4xl">
    <li>
      <NuxtLink
        to="/"
        class="block p-1"
        active-class="border-primary border-solid border-b-2 font-bold"
      >
        <i class="bi bi-house-door fs-1"></i>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="`/products/${category || '全部'}?search=${search}`"
        active-class="border-primary border-solid border-b-2 font-bold"
        class="border-primary block p-2"
      >
        <i class="bi bi-shop fs-1"></i>
      </NuxtLink>
    </li>
    <li>
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
    <li>
      <button type="button" class="block p-2" @touchstart="toggleNavbar">
        <i class="bi bi-justify"></i>
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
