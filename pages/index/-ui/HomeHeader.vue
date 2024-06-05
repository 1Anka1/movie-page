<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useMoviesByWeekFetch } from '~/entities/movie'

const { data } = await useMoviesByWeekFetch()
</script>

<template>
  <ASwiper
    class="mb-14"
    :options="{
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
    }"
  >
    <template #inner>
      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />
    </template>
    <ASwiperSlide v-for="movie in data?.results ?? []" :key="movie.id">
      <div class="page-header">
        <div class="pointer-events-none absolute inset-0 z-[2] bg-black/50" />
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          :alt="movie.original_title"
          class="absolute inset-0 z-[1] size-full object-cover object-top"
        />
        <div class="container relative z-[3] flex h-full items-center">
          <div class="w-96">
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
      </div>
    </ASwiperSlide>
  </ASwiper>
</template>
