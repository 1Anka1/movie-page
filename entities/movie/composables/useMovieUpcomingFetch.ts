import type { Movie } from '../models/Movie'

export function useMovieUpcomingFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Movie>>('/movie/upcoming', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
