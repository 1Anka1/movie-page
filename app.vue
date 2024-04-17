<script setup lang="ts">
import { useMoviesGenresStore } from '~/entities/movie'

const moviesGenresStore = useMoviesGenresStore()

await useAsyncData('genres', () => moviesGenresStore.fetchGenres())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
