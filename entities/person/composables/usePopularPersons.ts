import type { Person } from '../models/Person'

export function usePopularPersons() {
  const config = useRuntimeConfig()

  return useFetch<Pagination<Person>>('/person/popular', {
    baseURL: config.public.apiMovieBaseUrl,
    query: {
      api_key: config.public.apiMovieKey,
    },
  })
}
