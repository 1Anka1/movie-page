<script setup>
import MovieCard from '~/entities/movie/ui/MovieCard.vue'
import { useMoviesTopRatedFetch } from '~/entities/movie/index'

const { data } = await useMoviesTopRatedFetch()
</script>

<template>
  <div class="container mb-32">
    <h2 class="mb-11 text-3xl font-bold">
      Top Rated
    </h2>
    <div class="grid grid-cols-4 gap-7">
      <MovieCard v-for="movie in data?.results ?? []" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
