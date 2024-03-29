<template>
  <HomeHeader />
  <MovieTrendingByDayPage />
  <MovieUpcomingPage />
  <MovieTopRatedPage />
  <Footer />
</template>

<script setup lang="ts">
import HomeHeader from './ui/HomeHeader.vue';
import MovieTrendingByDayPage from './ui/MovieTrendingByDayPage.vue';
import MovieUpcomingPage from './ui/MovieUpcomingPage';
import MovieTopRatedPage from './ui/MovieTopRatedPage';
import Footer from './ui/Footer.vue';
</script>
