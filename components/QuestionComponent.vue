<template>
  <div class="flex flex-col justify-center gap-6 w-full items-center">
    <div
      class="flex flex-col items-center justify-center bg-theme4 dark:bg-dark-theme2 max-w-xl px-8 mx-4 rounded-md"
    >
      <div class="flex flex-row mt-3">
        <span class="text-2xl font-bold text-center font-roboto"
          >In which year did this event take place?</span
        >
      </div>
      <div class="flex flex-col items-center w-full mt-5 mb-4 font-roboto">
        <p class="text-lg font-semibold underline">{{ question.question }}</p>
      </div>
      <div class="flex flex-col w-full mt-5 mb-4 font-roboto justify-center">
        <div class="flex shrink justify-center">
          <FormKit
            v-model="value"
            :classes="{
              input: {
                'text-dark-theme4 dark:text-dark-theme4': true,
              },
            }"
            type="number"
            number="integer"
            name="temperature"
            min="1900"
            max="2023"
            step="1"
          />
        </div>

        <FormKit
          v-model="value"
          :classes="{
            input: {
              'accent-dark-theme2 dark:accent-dark-theme3': true,
            },
          }"
          type="range"
          number="integer"
          min="1900"
          max="2023"
        />
      </div>
      <button
        class="bg-dark-theme1 hover:bg-dark-theme2 dark:hover:bg-dark-theme3 text-white font-bold py-2 px-4 border border-dark-theme4 rounded mb-4 font-roboto"
        @click="$emit('answerEvent', parseInt(value))"
      >
        Confirm!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuestion } from "~/types/question";

defineProps<{
  question: IQuestion;
}>();
defineEmits(["answerEvent"]);

const value = ref("1900");
</script>
