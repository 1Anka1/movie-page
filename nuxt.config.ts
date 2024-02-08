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
      Inter: true,
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
  experimental: {
    componentIslands: true,
  },
});
