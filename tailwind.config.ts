import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#a10f32',
          DEFAULT: '#be123c',
          light: '#d31946',
        },
      },
    },
    container: {
      center: true,
      padding: '15px',
      screens: {},
    },
  },
}
