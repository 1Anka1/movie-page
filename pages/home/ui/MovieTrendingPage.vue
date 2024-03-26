<template>
  <div class="container">
    <h2 class="moviePage__title">Trending Movie</h2>
    <div class="moviePage__page">
      <MovieCard v-for="movie in data?.results ?? []" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieCard from '~/entities/movie/ui/MovieCard.vue';
import { useMoviesByDayFetch } from '~/entities/movie/index';

const { data } = await useMoviesByDayFetch();
</script>

<style scoped>
.moviePage__page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-gap: 30px;
}

.moviePage__title {
  font: 400 18px/1.5 'DM Sans';
  margin-bottom: 20px;
}
</style>
