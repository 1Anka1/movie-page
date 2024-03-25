<template>
  <div class="movie__container">
    <div class="movie__movie-poster">
      <img
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
        :alt="movie.original_title"
      />
      <a class="movie__favorite-icon" href="#">
        <svg-icon type="mdi" :path="mdiCardsHeart" width="30" height="30"></svg-icon>
      </a>
    </div>
    <div>
      <p class="movie__release-date">{{ movie.release_date }}</p>
      <h2 class="movie__title">{{ movie.original_title }}</h2>
      <div class="movie__movie-vote-container">
        <div class="movie__vote">
          <img src="~/assets/img/vote.png" alt="vote" width="35" height="17" />
          <p class="movie__rations">{{ Math.round(movie.vote_average) }}/10</p>
        </div>
        <div class="movie__vote">
          <img src="~/assets/img/tomato.png" alt="vote-pomidoro" width="16" height="17" />
          <p class="movie__rations">{{ Math.round((movie.vote_average * 100) / 10) }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCardsHeart } from '@mdi/js';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style scoped>
.movie__container {
  transition: 1s ease;
}

.movie__container:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: 1s ease;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.movie__movie-poster {
  position: relative;
  max-width: 300px;
}

.movie__favorite-icon {
  position: absolute;
  top: 4%;
  right: 5%;
  color: #d1d5db;
  transition: color 0.3s ease;
}

.movie__favorite-icon:hover {
  color: red;
  transform: scale(1.2);
}

.movie__release-date {
  color: gray;
  margin: 12px 0;
  font-size: 12px;
}

.movie__movie-vote-container {
  display: flex;
  justify-content: space-between;
}

.movie__vote {
  display: flex;
  gap: 10px;
}

.movie__rations {
  font-size: 12px;
}

.movie__title {
  font-size: 18px;
  margin-bottom: 12px;
}
</style>
