<script setup>
import MovieCard from '~/entities/movie/ui/MovieCard.vue'
import { useMovieUpcomingFetch } from '~/entities/movie/index'

const { data } = await useMovieUpcomingFetch()
</script>

<template>
  <div class="container mb-32">
    <h2 class="mb-11 text-3xl font-bold">
      New Arrival
    </h2>
    <div class="grid grid-cols-4 gap-7">
      <MovieCard v-for="movie in data?.results ?? []" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
