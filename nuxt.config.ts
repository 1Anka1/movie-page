// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiMovieBaseUrl: process.env.API_MOVIE_BASE_URL,
      apiMovieKey: process.env.API_MOVIE_KEY,
    },
  },
  googleFonts: {
    base64: true,
    families: {
      'DM Sans': {
        wght: '100..1000',
        ital: '100..1000',
      },
    },
  },
  imports: {
    dirs: ['./models'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  css: ['swiper/css', '~/assets/css/main.css'],
  experimental: {
    componentIslands: true,
  },
});
