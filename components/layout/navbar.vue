<script setup></script>

<template>
  <nav class="bg-black">
    <ul
      class="text-primary mx-auto flex max-w-[1320px] items-center justify-center text-xl"
    >
      <li class="mr-auto">
        <h1>
          <NuxtLink
            to="/"
            class="block p-1 transition-all duration-75 hover:scale-105 hover:opacity-90"
          >
            <img
              src="/images/logos/橫向LOGO.png"
              width="130"
              height="75"
              alt="小巷弄甜點logo"
            >
          </NuxtLink>
        </h1>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          主頁
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/products"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          產品列表
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/questions"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          常見問題
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/about"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          關於我們
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/contact"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          聯絡我們
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/order"
          active-class="border-primary border-b-2"
          class="border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          查詢訂單
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/favorite"
          active-class="border-primary border-b-2"
          class="nav-link collect border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          <!-- <span v-if="collect_data.length > 0"> -->
          <template v-if="true">
            <i class="bi bi-heart-fill text-[30px]" style="color: red" />
          </template>
          <template v-else>
            <i class="bi bi-heart collect_icon text-[30px]" />
          </template>
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="/carts"
          active-class="border-primary border-b-2"
          class="nav-link collect border-primary block p-2 transition-all duration-75 hover:scale-105 hover:border-b-2 hover:opacity-90"
        >
          <i class="bi bi-cart4 text-[30px]" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
