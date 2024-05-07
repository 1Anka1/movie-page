<!-- eslint-disable vue/valid-v-for -->
<script setup lang="ts">
import { useMovieByID } from '~/entities/movie'

definePageMeta({
  layout: 'main',
})

const route = useRoute()
const id = ref(route.params.id)
const data = await useMovieByID().getMovieByID(id.value)
</script>

<template>
  <div class="relative mb-9 h-[min(100vh,1300px)] text-white">
    <div class="pointer-events-none absolute inset-0 z-[2] bg-black/50 " />
    <NuxtImg
      :src="`https://image.tmdb.org/t/p/original/${data.backdrop_path}`"
      :alt="data.original_title"
      class="absolute inset-0 z-[1] size-full object-cover object-top"
    />

    <div class="container relative inset-y-1/4 z-[2] flex h-[400px] gap-8 bg-black/65 p-5 text-white">
      <NuxtImg
        :src="`https://image.tmdb.org/t/p/original/${data.poster_path}`"
        :alt="data.original_title"
        width="350"
        class="object-cover"
      />

      <div>
        <div class="grid gap-5">
          <h1 class="text-5xl font-bold">
            {{ data.original_title }}
          </h1>
          <p class="text-lg">
            {{ data.overview }}
          </p>
          <div>
            <ul class=" flex text-base tracking-wide gap-8">
              <li>
                <span class="text-primary">Status: </span> {{ data.status }}</li>
              <li>
                <span class="text-primary">Realease: </span> {{ new Date(data.release_date).getFullYear() }}
              </li>
              <li class="mb-5">
                <span class="text-primary">Runtime: </span>  {{ data.runtime }} min
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-4 flex gap-3">
          <div class="flex items-center gap-2">
            <AIcon name="imdb" class="h-5 w-10" />
            <p class="text-xs">
              {{ Math.round(data.vote_average) }}/10
            </p>
          </div>
          <div class="flex items-center gap-1">
            <AIcon name="tomato" class="h-5 w-10" />
            <p class="text-xs">
              {{ Math.round((data.vote_average * 100) / 10) }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-auto flex w-[500px] flex-col">
    <h2 class="mb-3 text-xl font-bold">
      What do you think about {{ data.original_title }}?
    </h2>
    <div class="grid gap-5">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div class="mt-2">
          <div class="flex rounded-md ring-1 ring-gray-300">
            <input id="username" type="text" name="username" class="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Your nickname">
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
        <div class="mt-2">
          <textarea
            name="about"
            placeholder="Write a few sentences about the movie."
            class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
    <div class="mb-8 flex items-center justify-center">
      <button type="submit" class="rounded-md bg-primary px-5 py-2 text-sm text-white ">
        Sent
      </button>
    </div>
  </div>
</template>
