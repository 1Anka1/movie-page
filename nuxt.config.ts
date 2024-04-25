// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiMovieAccessToken: '',
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
  // eslint-disable-next-line node/prefer-global/process
  ignore: [process.env.NODE_ENV === 'production' ? 'pages/**/-*' : ''],
  components: {
    dirs: ['./components/ui', './components/app'],
  },
  imports: {
    dirs: ['./models', './stores'],
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
