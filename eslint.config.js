import { FlatCompat } from '@eslint/eslintrc'
import antfu from '@antfu/eslint-config'

const compat = new FlatCompat()

export default antfu(
  {
    rules: {
      'no-console': 'warn',
      'ts/no-explicit-any': 'error',
    },
  },
  ...compat.extends('plugin:tailwindcss/recommended'),
)
