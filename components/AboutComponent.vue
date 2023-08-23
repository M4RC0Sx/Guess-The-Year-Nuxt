<template>
  <div class="flex flex-col justify-center gap-6 w-full items-center">
    <div
      class="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-600 h-16 max-w-xl px-8 rounded-md"
    >
      <div class="flex flex-row gap-x-3">
        <github-button
          class="dark:block hidden"
          href="https://github.com/M4RC0Sx"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @M4RC0Sx on GitHub"
          >Follow @M4RC0Sx</github-button
        >
        <github-button
          class="dark:hidden"
          href="https://github.com/M4RC0Sx"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Follow @M4RC0Sx on GitHub"
          >Follow @M4RC0Sx</github-button
        >

        <github-button
          class="dark:hidden"
          href="https://github.com/M4RC0Sx/Guess-The-Year-Nuxt"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star M4RC0Sx/Guess-The-Year-Nuxt on GitHub"
          >Star</github-button
        >
        <github-button
          class="dark:block hidden"
          href="https://github.com/M4RC0Sx/Guess-The-Year-Nuxt"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star M4RC0Sx/Guess-The-Year-Nuxt on GitHub"
          >Star</github-button
        >

        <github-button
          class="dark:block hidden"
          href="https://github.com/buttons/github-buttons/issues"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-issue-opened"
          data-size="large"
          ria-label="Issue M4RC0Sx/Guess-The-Year-Nuxt on GitHub"
          >Issue</github-button
        >
        <github-button
          class="dark:hidden"
          href="https://github.com/buttons/github-buttons/issues"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-issue-opened"
          data-size="large"
          aria-label="Issue buttons/github-buttons on GitHub"
          >Issue</github-button
        >
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-600 max-w-xl px-8 mx-4 rounded-md"
    >
      <div class="flex flex-row mt-3">
        <span class="text-2xl font-bold text-center"
          >Guess the year where each event took place!</span
        >
      </div>
      <div class="flex flex-col justify-items-start w-full mt-5 mb-4">
        <span class="font-semibold justify-self-start"> Instructions: </span>
        <ul class="ml-5 list-disc">
          <li>Answers range: 1900-2023</li>
          <li>Playing time: 1-2 minutes</li>
        </ul>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
      >
        <NuxtLink to="/game">Let's Play!</NuxtLink>
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-600 max-w-xl px-8 mx-4 rounded-md"
    >
      <div class="py-4">
        <p>
          This project is based on
          <a href="https://guess-the-year.davjhan.com/"
            >https://guess-the-year.davjhan.com/</a
          >
          and has been made with the aim of taking the first steps with Vue.js
          and Nuxt.
        </p>
        <br />
        <p>
          All code is available on GitHub and, among other things, features: use
          of git-flow, use of GitHub Actions to deploy to Vercel and check
          linting and formatting, TypeScript and TailwindCSS.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GithubButton from "vue-github-button";

export default {
  components: {
    GithubButton,
  },
};
</script>
