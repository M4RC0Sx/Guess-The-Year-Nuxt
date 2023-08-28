<template>
  <a
    class="dark:text-gray-200 cursor-pointer border-transparent border-solid border-2 hover:border-slate-300 p-1 rounded"
    @click="toggleDarkMode()"
  >
    <IconMoon
      class="w-6 h-6 dark:block hidden"
      :font-controlled="false"
    ></IconMoon>
    <IconSun class="w-6 h-6 dark:hidden" :font-controlled="false"></IconSun>
  </a>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

import IconSun from "~/assets/icons/sun.svg";
import IconMoon from "~/assets/icons/moon.svg";

const darkMode = useDark();
const toggleDarkMode = useToggle(darkMode);
</script>
