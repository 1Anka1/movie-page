<script setup lang="ts">
const title = ref('Movie Page');
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="theme-color" content="#000" />
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>
</template>
