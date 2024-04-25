<script setup lang="ts">
import { ActorSwiper, useActorsCast } from '~/entities/movie'

const { data } = await useActorsCast()
</script>

<template>
  <div class="container mb-32">
    <ActorSwiper :actors="data!.results">
      <template #title>
        Cast of characters
      </template>
    </ActorSwiper>
  </div>
</template>
