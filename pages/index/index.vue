<script setup lang="ts">
import HomeHeader from './-ui/HomeHeader.vue'
import HomeTrending from './-ui/HomeTrending.vue'
import HomeUpcoming from './-ui/HomeUpcoming.vue'
import HomeTopRated from './-ui/HomeTopRated.vue'
import HomeActors from './-ui/HomeActors.vue'

definePageMeta({
  layout: 'main',
})
</script>

<template>
  <HomeHeader />
  <HomeTrending />
  <HomeUpcoming />
  <HomeTopRated />
  <HomeActors />
</template>
