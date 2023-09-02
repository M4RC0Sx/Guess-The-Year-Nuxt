<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-row w-full justify-center">
      <div class="flex flex-row grow max-w-xl justify-between">
        <div
          class="bg-theme4 border-4 dark:bg-dark-theme2 px-8 py-4 sm:mx-0 mx-4 rounded-md"
        >
          <span class="font-roboto font-semibold">Score: {{ score }}</span>
        </div>
        <div
          class="bg-theme4 border-4 dark:bg-dark-theme2 px-8 py-4 sm:mx-0 mx-4 rounded-md"
        >
          <span class="font-roboto font-semibold">Lives: {{ lives }}</span>
        </div>
      </div>
    </div>
    <div v-if="gameStatus === GameStatus.STARTED" class="mt-4">
      <QuestionComponent
        v-if="!answered"
        :question="questions[questionIndex]"
        @answer-event="onAnswerEvent"
      />
      <AnsweredQuestionComponent
        v-else
        :question="questions[questionIndex]"
        :answered-year="answeredYear"
        :lives="lives"
        @post-answer-event="
          questionIndex += 1;
          answered = false;
        "
      />
    </div>
    <div
      v-else
      class="flex flex-col justify-center items-center bg-theme4 dark:bg-dark-theme2 p-4 rounded-md mt-5"
    >
      <div v-if="gameStatus === GameStatus.LOST">
        <h1 class="text-center font-semibold text-3xl font-roboto">
          You lost!
        </h1>
        <h2 class="text-center font-medium text-2xl font-roboto">
          Game finished with {{ score }} score!
        </h2>
      </div>
      <div v-else>
        <h1 class="text-center font-semibold text-3xl font-roboto">
          Congratulations! You won!
        </h1>
        <h2 class="text-center font-medium text-2xl font-roboto">
          Game finished with {{ score }} score!
        </h2>
      </div>
      <button
        class="mt-5 bg-dark-theme1 hover:bg-dark-theme2 dark:hover:bg-dark-theme3 text-white font-bold py-2 px-4 border border-dark-theme4 rounded mb-4"
      >
        <NuxtLink to="/">Return to home</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GameStatus } from "~/types/game-status.d";

import questions from "~/assets/questions.json";

const gameStatus = ref(GameStatus.STARTED);

const score = ref(0);
const lives = ref(100);

const answered = ref(false);
const answeredYear = ref(0);

// Unoptimized shuffle function, DO NOT USE ON SERIOUS PROJECTS!
questions.sort(() => Math.random() - 0.5);

const questionIndex = ref(0);

function onAnswerEvent(answer: number) {
  answered.value = true;
  answeredYear.value = answer;

  const correctAnswer = questions[questionIndex.value].year;
  if (correctAnswer === answer) {
    score.value += 1;
  } else {
    lives.value -= Math.abs(correctAnswer - answer);
  }
}

watch(lives, (value) => {
  if (value <= 0) {
    lives.value = 0;
    gameStatus.value = GameStatus.LOST;
  }
});

watch(questionIndex, (value) => {
  if (value >= questions.length) {
    gameStatus.value = GameStatus.WON;
  }
});
</script>
