<script setup lang="ts">
import { useMultiRequest } from './-composables/useMultiRequest'
import { PersonsSwiper } from '~/entities/person'
import { MovieSwiper } from '~/entities/movie'

definePageMeta({
  layout: 'main',
})

const route = useRoute()

const { fetchMultiData, persons, movies } = useMultiRequest()

await fetchMultiData(route.query.q as string)
</script>

<template>
  <div class="wrapper">
    <div class="mb-2 mt-28 line-clamp-2 h-14 text-lg">
      Search result: {{ route.query.q }}
    </div>
    <PersonsSwiper v-if="persons.length > 0" :persons>
      {{ persons }}
      <template #title>
        Actors
      </template>
    </PersonsSwiper>

    <div v-if="movies.length > 0">
      <MovieSwiper :movies>
        <template #title>
          Movie
        </template>
      </MovieSwiper>
    </div>
  </div>
</template>
