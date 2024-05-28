<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { type Collection, useMoviesGenresStore, useMoviesSearch } from '~/entities/movie'

const { genres } = storeToRefs(useMoviesGenresStore())
const { getMoviesBySearch } = useMoviesSearch()
const search = ref('')
const foundMovies = ref<Collection[]>([])

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
  navigateTo(`/search?q=${search.value}`)
  isFocused.value = false
}
</script>

<template>
  <div ref="target" class="relative">
    <form class="relative" @submit.prevent="submit">
      <input
        v-model="search"
        class="w-[500px] rounded-md border border-gray-200 bg-transparent p-3 outline-none duration-150 placeholder:text-white"
        :class="{
          'rounded-b-none': isFocused && foundMovies.length,
          'bg-white text-black placeholder:text-black': isFocused,
        }"
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
      :class="{ 'pointer-events-none translate-y-10 opacity-0': !isFocused || foundMovies.length === 0 }"
    >
      <NuxtLink
        v-for="movie in foundMovies"
        :key="movie.id"
        :to="`/movie/${movie.id}`"
        class="block px-3 py-2 transition-colors duration-150 hover:bg-gray-100"
        @click="isFocused = false"
      >
        <div class="flex items-center gap-5">
          <div>
            <NuxtImg
              :src="movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : '/img/no-available-image.png'"
              :alt="movie.original_title"
              width="50"
              class=" aspect-[2/3] object-cover"
            />
          </div>
          <div class="flex flex-col">
            <div>{{ movie.original_title }}</div>
            <div class="my-1 text-xs text-gray-500">
              {{ genres.filter(g => movie.genre_ids.includes(g.id)).map(g => g.name).join(', ') }}
            </div>
            <div class="my-1 text-xs text-gray-500">
              {{ new Date(movie.release_date).getFullYear() }}
            </div>
          </div>
        </div>
        <div />
      </NuxtLink>
    </div>
  </div>
</template>
