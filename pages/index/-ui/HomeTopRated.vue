<script setup lang="ts">
import { MovieSwiper, useMoviesTopRatedFetch } from '~/entities/movie'

const { data } = await useMoviesTopRatedFetch()
</script>

<template>
  <MovieSwiper class="container mb-32" :movies="data!.results">
    <template #title>
      Top Rated
    </template>
  </MovieSwiper>
</template>
