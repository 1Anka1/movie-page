<script setup lang="ts">
import type { Movie } from '../models/Movie'
import MovieCard from './MovieCard.vue'
import type { ASwiper } from '#build/components'

defineProps<{
  movies: Movie[]
}>()

const swiper = ref<InstanceType<typeof ASwiper>>()
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h2 class="mb-10 text-3xl font-bold">
        <slot name="title" />
      </h2>
      <ASwiperArrows @next="swiper?.next" @prev="swiper?.prev" />
    </div>
    <ASwiper
      ref="swiper"
      :options="{
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        },
      }"
    >
      <ASwiperSlide
        v-for="movie in movies"
        :key="movie.id"
        class="mr-[10px] !w-full sm:!w-[calc(50%-10px)] md:!w-[calc(25%-10px)] lg:!w-[calc(20%-10px)]"
      >
        <MovieCard :movie="movie" />
      </ASwiperSlide>
    </ASwiper>
  </div>
</template>
