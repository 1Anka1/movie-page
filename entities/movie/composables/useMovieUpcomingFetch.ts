import type { Collection } from '..'

export function useMovieUpcomingFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Collection>>('/movie/upcoming', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
