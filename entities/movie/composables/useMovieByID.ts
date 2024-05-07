import type { MovieByID } from '..'

export function useMovieByID() {
  const getMovieByID = async (movie_id: string) => {
    const config = useRuntimeConfig()

    const res = await $fetch<MovieByID>(`/movie/${movie_id}`, {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
      },
    })
    return res
  }

  return {
    getMovieByID,
  }
}
