<script setup lang="ts">
import { ActorSwiper, MovieSwiper, useMultiRequest } from '~/entities/movie'

definePageMeta({
  layout: 'main',
})
const route = useRoute()

const { getMultiRequest } = useMultiRequest()

const data = await getMultiRequest(route.query.q as string)

// const { genres } = storeToRefs(useMoviesGenresStore())
</script>

<template>
  <div class="wrapper">
    <div class="mb-2 mt-28 line-clamp-2 h-14 text-lg">
      Search result: {{ route.query.q }}
    </div>
    <ActorSwiper v-if="data?.actors && data.actors.length > 0" :actors="data.actors">
      {{ data.actors }}
      <template #title>
        Actors
      </template>
    </ActorSwiper>

    <div v-if="data?.collections && data.collections.length > 0">
      <MovieSwiper :movies="data.collections">
        <template #title>
          Movie
        </template>
      </MovieSwiper>
    </div>
  </div>
</template>
