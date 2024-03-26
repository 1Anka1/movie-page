<script setup lang="ts">
import { useMoviesByWeekFetch } from '~/entities/movie';
const { data } = await useMoviesByWeekFetch();
</script>

<template>
  <ASwiper>
    <ASwiperSlide v-for="movie in data?.results ?? []" :key="movie.id">
      {{ movie.title }}
    </ASwiperSlide>
  </ASwiper>
</template>
