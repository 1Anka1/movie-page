import type { Movie } from '..';

export const useMoviesStore = defineStore('movies', () => {
  const moviesPagination = ref<Pagination<Movie> | null>(null);
  const movies = computed(() => moviesPagination.value?.results || []);

  return {
    moviesPagination,
    movies,
  };
});
