import type { Movie } from '..';

export const useMovieUpcomingFetch = () => {
  const config = useRuntimeConfig();

  return useFetch<Pagination<Movie>>('/movie/upcoming', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  });
};
