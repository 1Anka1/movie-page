import type { Movie } from '..';

export const useMovieLatestFetch = () => {
  const config = useRuntimeConfig();

  return useFetch<Pagination<Movie>>('/movie/latest', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  });
};
