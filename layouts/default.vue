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
    <div class="pt-[83.53px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss"></style>
