<script setup lang="ts">
import { MovieSwiper, useMovieUpcomingFetch } from '~/entities/movie'

const { data } = await useMovieUpcomingFetch()
</script>

<template>
  <MovieSwiper class="container mb-32" :movies="data!.results">
    <template #title>
      New Arrival
    </template>
  </MovieSwiper>
</template>
