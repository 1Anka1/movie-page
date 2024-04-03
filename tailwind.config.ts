import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#BE123C',
      },
    },
    container: {
      center: true,
      padding: '15px',
      screens: {},
    },
  },
}
