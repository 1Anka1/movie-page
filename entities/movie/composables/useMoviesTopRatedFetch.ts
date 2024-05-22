import type { Collection } from '..'

export function useMoviesTopRatedFetch() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Collection>>('/movie/top_rated', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
