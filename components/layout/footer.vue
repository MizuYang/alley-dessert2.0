<script setup></script>

<template>
  <footer class="text-primary bg-black py-3">
    <ul class="mx-auto flex max-w-[1320px] items-center justify-center text-xl">
      <li>
        <ul>
          <li class="text-center text-2xl">
            個人聲明
          </li>
          <li>- 此作品僅為練習使用，無商業用途。</li>
          <li>- 所使用圖片皆為免費資源。</li>
          <li>- 如不小心誤觸版權圖片，請聯絡我。</li>
          <li>
            -
            <i class="bi bi-envelope border-primary border-b-2">
              <a href="mailto:psdk55052004@gmail.com">
                psdk55052004@gmail.com</a>
            </i>
          </li>
        </ul>
      </li>
      <li class="mx-auto">
        <NuxtLink
          to="/"
          class="block transition-all hover:scale-[1.01] hover:opacity-90"
        >
          <img
            src="/images/logos/LOGO_PNG_Big-removebg-preview.png"
            width="180"
            height="180"
            alt="表尾logo"
          >
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="https://github.com/MizuYang"
          class="block transition-all duration-75 hover:scale-110 hover:opacity-90"
          target="_blank"
          title="移動到 mizu github"
          external
        >
          <i class="bi bi-github text-[30px]" />
        </NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink
          to="https://equatorial-alloy-23b.notion.site/Mizu_-dc646b31574641de856dd54ac3f6cc1b"
          class="block transition-all duration-75 hover:scale-110 hover:opacity-90"
          target="_blank"
          title="移動到個人部落格"
          external
        >
          <i class="bi bi-facebook text-[30px]" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/login"
          class="block p-2 transition-all duration-75 hover:scale-105 hover:opacity-90"
        >
          <i class="bi bi-key" /> 企業登入
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
