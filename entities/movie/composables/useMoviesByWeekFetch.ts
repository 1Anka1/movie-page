import type { Collection } from '..'

export function useMoviesByWeekFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Collection>>('/trending/movie/week', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
