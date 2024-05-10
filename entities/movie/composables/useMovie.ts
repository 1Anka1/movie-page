import type { MovieDetails } from '..'

export function useMovie() {
  const getMovieByID = async (movieId: string) => {
    const config = useRuntimeConfig()

    const res = await $fetch<MovieDetails>(`/movie/${movieId}`, {
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
