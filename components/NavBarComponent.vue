<template>
  <nav
    class="flex space-x-4 py-4 mx-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 mb-8"
  >
    <div
      class="flex flex-auto items-center justify-between mx-auto p-4 max-w-4xl"
    >
      <ul class="flex items-center list-none">
        <ThemeSwitcherComponent />
      </ul>
      <ul class="flex items-center list-none dark:text-gray-200">
        <NuxtLink class="md:text-5xl text-xl font-bold" to="/"
          >Guess The Year</NuxtLink
        >
      </ul>
      <ul class="flex items-center list-none">
        <a
          class="dark:text-gray-200"
          href="https://github.com/M4RC0Sx/Guess-The-Year-Nuxt"
        >
          <IconGitHub class="w-6 h-6" :font-controlled="false" />
        </a>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import IconGitHub from "~/assets/icons/github.svg";
</script>
