import type { Movie } from '..'

export function useMoviesByDayFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Movie>>('/trending/movie/day', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
