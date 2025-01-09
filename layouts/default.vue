<script setup lang="ts">
// 解決 aos 產生的X軸
function removeXAxosGeneratedByAos() {
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";
}

onMounted(() => {
  removeXAxosGeneratedByAos();
});
</script>

<template>
  <div>
    <LayoutNavbar />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style lang="scss"></style>
