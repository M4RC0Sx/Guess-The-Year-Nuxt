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
    <div v-if="gameStatus === GameStatus.STARTED">
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
    <div v-else>
      <h1>Game finished with {{ score }} score!</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
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
</script>
