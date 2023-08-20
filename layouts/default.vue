<template>
  <div class="relative flex flex-col">
    <main class="flex flex-col grow">
      <NavBarComponent />
      <ul>
        <li><NuxtLink to="/">Index</NuxtLink></li>
        <li><NuxtLink to="/game">Game</NuxtLink></li>
      </ul>
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>
