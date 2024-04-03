<script setup lang="ts">
import * as icons from '~/components/icons'

defineProps<{
  name: keyof typeof icons
}>()
</script>

<template>
  <component :is="icons[name]" />
</template>
