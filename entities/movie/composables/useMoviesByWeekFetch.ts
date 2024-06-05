import type { Movie } from '..'

export function useMoviesByWeekFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Movie>>('/trending/movie/week', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
