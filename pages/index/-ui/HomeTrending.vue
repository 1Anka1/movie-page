<script setup lang="ts">
import { MovieSwiper, useMoviesByDayFetch } from '~/entities/movie'

const { data } = await useMoviesByDayFetch()
</script>

<template>
  <div class="wrapper">
    <MovieSwiper :movies="data!.results">
      <template #title>
        Trending Movie
      </template>
    </MovieSwiper>
  </div>
</template>
