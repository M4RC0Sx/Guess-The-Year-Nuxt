<template>
  <a class="dark:text-gray-200" @click="toggleDarkMode()">
    <IconMoon
      class="w-6 h-6 dark:block hidden"
      :font-controlled="false"
    ></IconMoon>
    <IconSun class="w-6 h-6 dark:hidden" :font-controlled="false"></IconSun>
  </a>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

import IconSun from "~/assets/img/icons/sun.svg";
import IconMoon from "~/assets/img/icons/moon.svg";

const darkMode = useDark();
const toggleDarkMode = useToggle(darkMode);
</script>
