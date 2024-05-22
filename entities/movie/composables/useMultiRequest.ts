import type { Collection } from '../models/Collection'

export function useMultiRequest() {
  const getMultiRequest = async (search: string) => {
    const config = useRuntimeConfig()

    const res = await $fetch<{ results: Collection[] }>('search/multi?', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
        query: search,
      },
    })
    return res.results
  }
  return {
    getMultiRequest,
  }
}
