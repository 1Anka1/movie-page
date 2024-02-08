<script setup lang="ts">
import { useMovieByDayFetch, useMoviesStore } from '~/entities/movie';

const { moviesPagination, movies } = storeToRefs(useMoviesStore());
const { data } = await useMovieByDayFetch();

moviesPagination.value = data.value;
</script>

<template>
  <div v-for="movie in movies" :key="movie.id">
    {{ movie.title }}
  </div>
</template>
