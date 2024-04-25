<script setup lang="ts">
import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'

const { options } = defineProps<{
  options?: SwiperOptions
  innerClass?: any
}>()

const wrapper = ref<HTMLDivElement>()

let swiper: Swiper

onMounted(() => {
  swiper = new Swiper(wrapper.value!, options)
})

onBeforeUnmount(() => {
  swiper.destroy()
})
</script>

<template>
  <div ref="wrapper" class="swiper">
    <div class="swiper-wrapper" :class="innerClass">
      <slot />
    </div>
  </div>
</template>
