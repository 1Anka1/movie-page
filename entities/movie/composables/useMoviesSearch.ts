import type { Collection } from '..'

export function useMoviesSearch() {
  const getMoviesBySearch = async (search: string) => {
    const config = useRuntimeConfig()

    const res = await $fetch<{ results: Collection[] }>('search/movie?', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
        query: search,
      },
    })

    return res.results
  }

  return {
    getMoviesBySearch,
  }
}
