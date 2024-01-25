<script setup lang="ts">
const { data, pending, error, refresh } = useFetch<any>(
  'https://jsonplaceholder.typicode.com/todos',
);
</script>

<template>
  <div v-for="item in data" :key="item.id" style="font-family: 'Inter'">
    {{ item.title }}
  </div>
</template>
