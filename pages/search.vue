<script setup lang="ts">
import { useMoviesGenresStore, useMultiRequest } from '~/entities/movie'

definePageMeta({
  layout: 'main',
})
const route = useRoute()

const { getMultiRequest } = useMultiRequest()

const data = await getMultiRequest(route.query.q as string)

const { genres } = storeToRefs(useMoviesGenresStore())
</script>

<template>
  <div v-for="movie in data" :key="movie.id" class="container mb-32">
    <!-- <MovieSwiper :movies="data">
      <template #title>
        Trending Movie
      </template>
    </MovieSwiper> -->
    {{ movie.title }}
    <div class="text-xs text-gray-500">
      {{ genres.filter(g => movie.genre_ids.includes(g.id)).map(g => g.name).join(', ')
      }}
    </div>
  </div>
</template>
