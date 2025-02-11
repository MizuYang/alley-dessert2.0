<script setup></script>

<template>
  <footer class="flex items-center justify-between">
    <NuxtLink
      to="/carts"
      class="bg-gray-800 px-3 py-2 text-xl hover:bg-gray-700/90 active:bg-gray-600/80"
      >上一步</NuxtLink
    >
    <button
      type="button"
      class="bg-red-800 px-3 py-2 text-xl hover:bg-red-700/90 active:bg-red-600/80"
    >
      下一步
    </button>
  </footer>
</template>

<style lang="scss" scoped></style>
