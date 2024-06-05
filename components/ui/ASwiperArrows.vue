<script setup lang="ts">
const emit = defineEmits<{
  next: []
  prev: []
}>()
</script>

<template>
  <div class="flex gap-6">
    <button @click="emit('prev')">
      <AIcon name="chevronLeft" class="size-5 rotate-180" />
    </button>
    <button @click="emit('next')">
      <AIcon name="chevronLeft" class="size-5" />
    </button>
  </div>
</template>
