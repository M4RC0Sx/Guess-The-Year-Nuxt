<template>
  <div>
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";
const LOCAL_STORAGE_THEME_KEY = "theme";

onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY,
  ) as Theme;

  if (themeFromLocalStorage) {
    document.documentElement.classList.add(themeFromLocalStorage);
  } else {
    document.documentElement.classList.remove(
      isDarkModePreferred ? "dark" : "light",
    );
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
