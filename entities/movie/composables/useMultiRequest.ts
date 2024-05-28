import type { Actor, Collection } from '..'

export function useMultiRequest() {
  const getMultiRequest = async (search: string) => {
    const actors = ref<Actor[]>([])
    const collections = ref<Collection[]>([])

    const config = useRuntimeConfig()

    const res = await $fetch<{ results: (Actor | Collection)[] }>('search/multi?', {
      baseURL: config.public.apiMovieBaseUrl,
      query: {
        api_key: config.public.apiMovieKey,
        query: search,
      },
    })

    if (res && Array.isArray(res.results)) {
      res.results.forEach((item) => {
        if (item.media_type === 'person')
          actors.value.push(item as Actor)
        else
          collections.value.push(item as Collection)
      })
    }

    return { actors: actors.value, collections: collections.value }
  }

  return {
    getMultiRequest,
  }
}
