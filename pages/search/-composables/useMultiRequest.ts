import type { Movie } from '~/entities/movie'
import type { Person } from '~/entities/person'

export function useMultiRequest() {
  const config = useRuntimeConfig()

  const persons = ref<Person[]>([])
  const movies = ref<Movie[]>([])

  const fetchMultiData = async (search: string) => {
    const { results } = await $fetch<{ results: (Person | Movie)[] }>('/search/multi', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
        query: search,
      },
    })

    const { movie, person } = Object.groupBy(results, ({ media_type }) => media_type)

    movies.value = movie as Movie[] || []
    persons.value = person as Person[] || []
  }

  return {
    fetchMultiData,
    persons,
    movies,
  }
}
