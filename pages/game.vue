<template>
  <div>
    <h1>Game page</h1>
  </div>
</template>

<script>
import questions from "~/assets/questions.json";

// Unoptimized shuffle function, DO NOT USE ON SERIOUS PROJECTS!
questions.sort(() => Math.random() - 0.5);
</script>
