<script setup lang="ts">
import { PersonsSwiper, usePopularPersons } from '~/entities/person'

const { data } = await usePopularPersons()
</script>

<template>
  <div class="wrapper">
    <PersonsSwiper :persons="data!.results">
      <template #title>
        Cast of characters
      </template>
    </PersonsSwiper>
  </div>
</template>
