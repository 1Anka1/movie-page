<script setup lang="ts">
import type { Movie } from '..'
import { useMoviesGenresStore } from '..'

const { movie } = defineProps<{
  movie: Movie
}>()

const moviesGenresStore = useMoviesGenresStore()

const genres = computed(() => movie.genre_ids.map(id => moviesGenresStore.genres.find(genre => genre.id === id)?.name))
</script>

<template>
  <div>
    <div class="relative mb-3">
      <NuxtLink :to="`/movie/${movie.id}`">
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
          :alt="movie.original_title"
          width="300"
          class="aspect-[9/14] w-full object-cover"
        />
      </NuxtLink>
      <button
        class="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/50 text-white/85 duration-300 hover:scale-110 hover:text-red-500"
      >
        <AIcon name="heart" />
      </button>
    </div>
    <div>
      <p class="mb-2 text-xs text-gray-500">
        {{ new Date(movie.release_date).getFullYear() }}
      </p>
      <h2 class="mb-2 line-clamp-3 h-14 text-lg leading-none">
        <NuxtLink :to="`/movie/${movie.id}`">
          {{ movie.original_title }}
        </NuxtLink>
      </h2>
      <div class="mb-2 flex justify-between">
        <div class="flex items-center gap-2.5">
          <AIcon name="imdb" class="h-5 w-10" />
          <p class="text-xs">
            {{ Math.round(movie.vote_average) }}/10
          </p>
        </div>
        <div class="flex items-center gap-1">
          <AIcon name="tomato" class="h-5 w-10" />
          <p class="text-xs">
            {{ Math.round((movie.vote_average * 100) / 10) }}%
          </p>
        </div>
      </div>
      <div class="text-xs text-gray-500">
        {{ genres.join(', ') }}
      </div>
    </div>
  </div>
</template>
