<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import type { Actor } from '..'
import ActorCard from './ActorCard.vue'

defineProps<{
  actors: Actor[]
}>()

const isMounted = ref(false)
</script>

<template>
  <div :class="{ 'me-[-10px]': !isMounted }">
    <h2 class="mb-10 text-3xl font-bold">
      <slot name="title" />
    </h2>
    <ASwiper
      :options="{
        modules: [Pagination],
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
      :inner-class="{ '!flex gap-[10px]': !isMounted }"
      @init="isMounted = true"
    >
      <ASwiperSlide
        v-for="actor in actors"
        :key="actor.id"
        :class="{ '!w-full sm:!w-[calc(50%-10px)] md:!w-[calc(25%-10px)] lg:!w-[calc(20%-10px)]': !isMounted }"
      >
        <ActorCard :actor="actor" />
      </ASwiperSlide>
    </ASwiper>
  </div>
</template>
