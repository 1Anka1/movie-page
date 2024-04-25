<script setup lang="ts">
import Logo from '~/assets/Logo.vue'
</script>

<template>
  <header class="container absolute inset-x-0 top-0 z-10 p-4 text-white">
    <nav class="grid grid-flow-col place-items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-5">
        <div class="rounded-full bg-primary p-3">
          <Logo />
        </div>
        <span class="text-3xl font-bold">MovieBox</span>
      </NuxtLink>
      <TheHeaderSearch />
      <div class="flex items-center gap-7">
        <button>
          Sign In
        </button>
        <div class="rounded-full bg-primary p-2">
          <div class="relative size-5 cursor-pointer">
            <div class="absolute left-0.5 top-1 h-0.5 w-4 rounded-lg bg-white" />
            <div class="absolute left-0.5 top-3 h-0.5 w-4 rounded-lg bg-white" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
