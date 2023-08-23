<template>
  <div class="min-h-screen bg-gray-200 dark:bg-gray-700">
    <div class="relative flex flex-col">
      <main class="flex flex-col grow">
        <NavBarComponent />
        <slot />
      </main>
    </div>
  </div>
</template>
