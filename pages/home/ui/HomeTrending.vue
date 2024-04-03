<script setup lang="ts">
import { MovieSwiper, useMoviesByDayFetch } from '~/entities/movie'

const { data } = await useMoviesByDayFetch()
</script>

<template>
  <MovieSwiper class="container mb-32" :movies="data!.results">
    <template #title>
      Trending Movie
    </template>
  </MovieSwiper>
</template>
