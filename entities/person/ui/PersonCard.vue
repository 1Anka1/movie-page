<script setup lang="ts">
import type { Person } from '../models/Person'

defineProps<{
  person: Person
}>()
</script>

<template>
  <div>
    <div class="relative mb-3">
      <div>
        <NuxtImg
          :src="person.profile_path
            ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
            : '/img/no-available-image.png'"
          :alt="person.name"
          width="300"
          class="aspect-[9/14] w-full rounded-md object-cover"
        />
      </div>
    </div>
    <div>
      <h2 class="mb-2 line-clamp-2 h-14 text-lg font-bold	">
        {{ person.name }}
      </h2>
    </div>
  </div>
</template>
