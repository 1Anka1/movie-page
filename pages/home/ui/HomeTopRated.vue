<script setup lang="ts">
import { useMoviesTopRatedFetch } from '~/entities/movie';

const { data } = await useMoviesTopRatedFetch();
</script>

<template>
  <ASwiper>
    <ASwiperSlide v-for="movie in data?.results ?? []" :key="movie.id">
      {{ movie.title }}
    </ASwiperSlide>
  </ASwiper>
</template>
