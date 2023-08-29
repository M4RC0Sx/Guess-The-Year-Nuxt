<template>
  <div class="flex flex-col justify-center gap-6 w-full items-center">
    <div
      class="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-600 max-w-xl px-8 mx-4 rounded-md"
    >
      <div class="flex flex-row mt-3">
        <span class="text-2xl font-bold text-center"
          >In which year did this event take place?</span
        >
      </div>
      <div class="flex flex-col items-center w-full mt-5 mb-4">
        <p class="text-lg font-semibold underline">{{ question.question }}</p>
      </div>
      <div class="flex flex-col w-full mt-5 mb-4">
        <span>Your guess: {{ answeredYear }}</span>
        <span>Correct answer: {{ question.year }}</span>
        <span>Missed by: {{ Math.abs(question.year - answeredYear) }}</span>
        <span>Remaining lives: {{ lives }}</span>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
        @click="$emit('postAnswerEvent')"
      >
        Cotinue
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuestion } from "~/types/question";

defineProps<{
  question: IQuestion;
  answeredYear: number;
  lives: number;
}>();
defineEmits(["postAnswerEvent"]);
</script>
