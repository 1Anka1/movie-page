export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const { request_token } = await $fetch<{
    expires_at: string
    request_token: string
    success: boolean
  }>('/authentication/token/new', {
    baseURL: config.public.apiMovieBaseUrl,
    headers: {
      Authorization: `Bearer ${config.apiMovieAccessToken}`,
    },
  })

  console.log(123, request_token)

  const res = $fetch<{
    expires_at: string
    request_token: string
    success: boolean
  }>(`https://www.themoviedb.org/authenticate/${request_token}`, {
    baseURL: config.public.apiMovieBaseUrl,
    headers: {
      Authorization: `Bearer ${config.apiMovieAccessToken}`,
    },
  })

  return res
})
