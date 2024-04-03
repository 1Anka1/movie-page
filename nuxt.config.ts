// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiMovieBaseUrl: '',
      apiMovieKey: '',
    },
  },
  tailwindcss: {
    config: {
      content: ['./entities/**/*.vue'],
    },
  },
  components: {
    dirs: ['./components/ui'],
  },
  imports: {
    dirs: ['./models'],
  },
  image: {
    domains: ['image.tmdb.org'],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image', '@nuxt/fonts'],
  css: ['swiper/css', '~/assets/css/main.css'],
  experimental: {
    componentIslands: true,
  },
})
