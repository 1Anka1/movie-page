<script setup lang="ts">
import { MovieSwiper, useMoviesTopRatedFetch } from '~/entities/movie'

const { data } = await useMoviesTopRatedFetch()
</script>

<template>
  <div class="wrapper">
    <MovieSwiper :movies="data!.results">
      <template #title>
        Top Rated
      </template>
    </MovieSwiper>
  </div>
</template>
