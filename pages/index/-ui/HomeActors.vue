<script setup lang="ts">
import { ActorSwiper, useActorsCast } from '~/entities/movie'

const { data } = await useActorsCast()

</script>

<template>
  <div class="wrapper">
    <ActorSwiper :actors="data!.results">
      <template #title>
        Cast of characters
      </template>
    </ActorSwiper>
  </div>
</template>
