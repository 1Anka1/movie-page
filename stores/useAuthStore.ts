export const useAuthStore = defineStore('auth', () => {
  const requestPermissions = async () => {
    return $fetch('/api/auth')
  }

  return {
    requestPermissions,
  }
})
