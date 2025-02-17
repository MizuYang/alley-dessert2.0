<script setup>
import Left from "@/components/index/longImageArea/left.vue";
import Right from "@/components/index/longImageArea/right.vue";
</script>

<template>
  <div>
    <h2
      class="text-primary lg:leading-0 px-5 py-12 text-center text-[28px] leading-10 lg:px-0 lg:text-[48px]"
    >
      這是一群大學生，勇敢追夢的故事 -
    </h2>

    <div class="flex justify-center items-center flex-col lg:flex-row">
      <Left />
      <Right />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
