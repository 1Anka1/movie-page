<template>
  <div>
    <div class="relative mb-3">
      <NuxtImg
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        :alt="movie.original_title"
        width="300"
        class="aspect-[9/14] w-full object-cover"
      />
      <button
        class="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/50 text-white/85 duration-300 hover:scale-110 hover:text-red-500"
      >
        <AIcon name="heart" />
      </button>
    </div>
    <div>
      <p class="mb-3 text-xs text-gray-500">{{ movie.release_date }}</p>
      <h2 class="mb-3 line-clamp-2 h-14 text-lg">{{ movie.original_title }}</h2>
      <div class="flex justify-between">
        <div class="flex items-center gap-2.5">
          <AIcon name="imdb" class="h-5 w-10" />
          <p class="text-xs">{{ Math.round(movie.vote_average) }}/10</p>
        </div>
        <div class="flex items-center gap-1">
          <AIcon name="tomato" class="h-5 w-10" />
          <p class="text-xs">{{ Math.round((movie.vote_average * 100) / 10) }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '..';

defineProps<{
  movie: Movie;
}>();
</script>
