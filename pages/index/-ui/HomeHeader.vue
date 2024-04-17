<script setup lang="ts">
import { useMoviesByWeekFetch } from '~/entities/movie'

const { data } = await useMoviesByWeekFetch()
</script>

<template>
  <header class="container absolute inset-x-0 top-0 z-10 p-4 text-white">
    <nav class="grid grid-flow-col place-items-center justify-between">
      <div class="flex items-center gap-5">
        <div class="rounded-full bg-primary p-3">
          <AIcon name="tv" class="fill-white" />
        </div>
        <span class="text-3xl font-bold">MovieBox</span>
      </div>
      <ASearch />
      <div class="flex items-center gap-7">
        <button>Sign In</button>
        <div class="rounded-full bg-primary p-2">
          <div class="relative size-5 cursor-pointer">
            <div class="absolute left-0.5 top-1 h-0.5 w-4 rounded-lg bg-white" />
            <div class="absolute left-0.5 top-3 h-0.5 w-4 rounded-lg bg-white" />
          </div>
        </div>
      </div>
    </nav>
  </header>

  <ASwiper>
    <ASwiperSlide v-for="movie in data?.results ?? []" :key="movie.id">
      <div class="relative mb-14 text-white">
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          :alt="movie.original_title"
          class="h-400 mb-4 w-full object-cover"
        />
        <div class="absolute left-24 top-1/3 w-96">
          <h1 class="mb-4 text-5xl font-bold">
            {{ movie.original_title }}
          </h1>
          <div class="mb-4 flex gap-2">
            <div class="flex items-center gap-2.5">
              <AIcon name="imdb" class="h-5 w-10" />
              <p class="text-xs">
                {{ Math.round(movie.vote_average) }}/10
              </p>
            </div>
            <div class="flex items-center gap-1">
              <AIcon name="tomato" class="h-5 w-10" />
              <p class="text-xs">
                {{ Math.round((movie.vote_average * 100) / 10) }}%
              </p>
            </div>
          </div>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </ASwiperSlide>
  </ASwiper>
</template>
