<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-row w-full justify-center">
      <div class="flex flex-row grow max-w-xl justify-between">
        <div
          class="bg-gray-300 dark:bg-gray-600 px-8 py-4 sm:mx-0 mx-4 rounded-md"
        >
          <span>Score: {{ score }}</span>
        </div>
        <div
          class="bg-gray-300 dark:bg-gray-600 px-8 py-4 sm:mx-0 mx-4 rounded-md"
        >
          <span>Lives: {{ lives }}</span>
        </div>
      </div>
    </div>
    <QuestionComponent
      v-if="!gameFinished"
      :question="questions[questionIndex]"
      @answer-event="onAnswerEvent"
    />
    <h1 v-else class="text-4xl font-bold text-center">
      Congratulations! You finished the game!
    </h1>
  </div>
</template>

<script setup lang="ts">
import questions from "~/assets/questions.json";

const gameFinished = ref(false);
const score = ref(0);
const lives = ref(100);

// Unoptimized shuffle function, DO NOT USE ON SERIOUS PROJECTS!
questions.sort(() => Math.random() - 0.5);

const questionIndex = ref(0);

function onAnswerEvent(answer: number) {
  const correctAnswer = questions[questionIndex.value].year;
  if (correctAnswer === answer) {
    score.value += 1;
  } else {
    lives.value -= Math.abs(correctAnswer - answer);
  }
  questionIndex.value += 1;
}
</script>
