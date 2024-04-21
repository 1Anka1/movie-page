import type { Actor } from '..'

export function useActorsCast() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Actor>>('/person/popular', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
