<script setup lang="ts">
import type { Actor } from '..'

defineProps<{
  actor: Actor
}>()
</script>

<template>
  <div>
    <div class="relative mb-3">
      <div>
        <NuxtImg
          :src="actor.profile_path
            ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
            : '/img/no-image.png'"
          :alt="actor.name"
          width="300"
          class="aspect-[9/14] w-full rounded-md object-cover"
        />
      </div>
    </div>
    <div>
      <h2 class="mb-2 line-clamp-2 h-14 text-lg font-bold	">
        {{ actor.name }}
      </h2>
    </div>
  </div>
</template>
