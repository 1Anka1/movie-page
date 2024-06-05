import type { Movie } from '../models/Movie'

export function useMoviesTopRatedFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Movie>>('/movie/top_rated', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
