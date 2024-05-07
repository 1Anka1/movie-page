<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { type Movie, useMoviesSearch } from '~/entities/movie'

const { getMoviesBySearch } = useMoviesSearch()
const search = ref('')
const foundMovies = ref<Movie[]>([])

watchDebounced(search, async () => {
  foundMovies.value = await getMoviesBySearch(search.value)
}, {
  debounce: 500,
})

const target = ref(null)
const isFocused = ref(false)

watch(isFocused, () => {
  if (!isFocused.value)
    search.value = ''
})

onClickOutside(target, () => {
  isFocused.value = false
})

async function submit() {
  // await getMoviesBySearch(searchMovie.value)
}
</script>

<template>
  <div ref="target" class="relative">
    <form class="relative" @submit.prevent="submit">
      <input
        v-model="search"
        class="w-[500px] rounded-md border border-gray-200 bg-transparent p-3 outline-none duration-150 placeholder:text-white focus:bg-white focus:text-black focus:placeholder:text-black"
        :class="{ 'rounded-b-none': isFocused }"
        placeholder="What do you want to watch?"
        @click="isFocused = true"
      >
      <AIcon
        name="search"
        class="pointer-events-none absolute right-3 top-4 z-10 size-5"
        :class="{ 'text-black': isFocused }"
      />
    </form>
    <div
      class="absolute inset-x-0 top-full max-h-52 overflow-y-auto rounded-b-md border border-t-0 border-gray-200 bg-white text-black duration-150"
      :class="{ 'pointer-events-none translate-y-10 opacity-0': !isFocused }"
    >
      <NuxtLink
        v-for="movie in foundMovies"
        :key="movie.id"
        :to="`/movie/${movie.id}`"
        class="block px-3 py-2"
        @click="isFocused = false"
      >
        <div class="flex gap-5">
          <NuxtImg
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            :alt="movie.original_title"
            width="50"
          />
          <div class="flex flex-col">
            <p>{{ movie.original_title }}</p>
            <p class="my-1 text-xs text-gray-500">
              {{ new Date(movie.release_date).getFullYear() }}
            </p>
          </div>
        </div>
        <div />
      </NuxtLink>
    </div>
  </div>
</template>