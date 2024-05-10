<script setup lang="ts">
definePageMeta({
  layout: 'main',
})
</script>

<template>
  {{ $route.query.q }}
</template>
