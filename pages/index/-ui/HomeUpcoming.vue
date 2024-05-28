<script setup lang="ts">
import { MovieSwiper, useMovieUpcomingFetch } from '~/entities/movie'

const { data } = await useMovieUpcomingFetch()
</script>

<template>
  <div class="wrapper">
    <MovieSwiper :movies="data!.results">
      <template #title>
        New Arrival
      </template>
    </MovieSwiper>
  </div>
</template>
