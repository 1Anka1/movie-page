import type { Genre } from '../models/Genre'

export const useMoviesGenresStore = defineStore('movies-genres', () => {
  const genres = ref<Genre[]>([])

  const fetchGenres = async () => {
    const config = useRuntimeConfig()

    const res = await $fetch<{ genres: Genre[] }>('/genre/movie/list', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
      },
    })

    genres.value = res.genres

    return res.genres
  }

  return {
    genres,
    fetchGenres,
  }
})
