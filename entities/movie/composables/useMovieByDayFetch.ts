import type { Movie } from '..';

export const useMovieByDayFetch = () => {
  const config = useRuntimeConfig();

  return useFetch<Pagination<Movie>>('/trending/movie/day', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  });
};
