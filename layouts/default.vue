<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({});
});
</script>

<template>
  <div>
    <LayoutNavbar />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped></style>
