<template>
  <div class="min-h-screen bg-theme2 dark:bg-dark-theme3">
    <div class="relative flex flex-col">
      <main class="flex flex-col grow">
        <NavBarComponent />
        <slot />
      </main>
    </div>
  </div>
</template>
