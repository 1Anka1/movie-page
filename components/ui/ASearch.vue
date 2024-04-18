<script setup lang="ts">
import { useSearchMoviesStore } from '~/entities/movie'

const moviesBySearch = useSearchMoviesStore()
const searchMovie = ref('')
</script>

<template>
  <div>
    <form class="relative" @submit.prevent="moviesBySearch.getMoviesBySearch(searchMovie)">
      <input
        v-model="searchMovie"
        type="search"
        class="w-[500px] rounded-md border bg-transparent p-3 outline-none placeholder:text-white focus:border-primary"
        placeholder="What do you want to watch?"
      >
      <AIcon name="search" class="absolute right-3 top-4" />
    </form>
  </div>
</template>
