<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import type { Actor } from '..'
import ActorCard from './ActorCard.vue'

defineProps<{
  actors: Actor[]
}>()
</script>

<template>
  <div>
    <h2 class="mb-10 text-3xl font-bold">
      <slot name="title" />
    </h2>
    <ASwiper
      :options="{
        modules: [Navigation],
        navigation: true,
        spaceBetween: 50,
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      }"
    >
      <ASwiperSlide
        v-for="actor in actors"
        :key="actor.id"
        class="mr-[50px] !w-full sm:!w-[calc(calc(100%/3)-50px)] lg:!w-[calc(25%-50px)]"
      >
        <ActorCard :actor="actor" />
      </ASwiperSlide>
    </ASwiper>
  </div>
</template>
