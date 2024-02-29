<script setup lang="ts">
import { useMoviesByWeekFetch } from '~/entities/movie';

const { data } = await useMoviesByWeekFetch();
</script>

<template>
  <div>{{ data }}</div>
</template>
