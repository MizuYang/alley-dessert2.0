<script setup lang="ts">
// 解決 aos 產生的X軸
function removeXAxosGeneratedByAos() {
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";

  // 即使高度不足出現滾動條, 也給予滾動條, 避免因時有時無滾動條造成畫面跳動
  document.documentElement.style.overflowY = "scroll";
}

onMounted(() => {
  removeXAxosGeneratedByAos();
});
</script>

<template>
  <div>
    <LayoutNavbar />
    <div
      class="main-min-height text-primary bg-black pt-[72px] lg:pt-[83.53px]"
    >
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
.main-min-height {
  --nav-height: 83.53px;
  --footer-height: 202.27px;
  --margin-space: 83.53px;

  min-height: calc(
    100vh - var(--nav-height) - var(--footer-height) + var(--margin-space)
  );
}

// 滾動條樣式
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #f1ebd8;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #f1ebd8;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
