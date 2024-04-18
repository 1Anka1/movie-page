import type { Movie } from '../models/Movie'

export const useSearchMoviesStore = defineStore('searchStore', () => {
  const movies = ref<Movie[]>([])

  const getMoviesBySearch = async (search: string) => {
    const config = useRuntimeConfig()

    const res = await $fetch<{ results: Movie[] }>('search/movie?', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
        query: search,
      },
    })
    movies.value = res.results
    return res.results
  }
  return {
    movies,
    getMoviesBySearch,
  }
})
