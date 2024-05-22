import type { Collection } from '..'

export function useMoviesByDayFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Collection>>('/trending/movie/day', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
