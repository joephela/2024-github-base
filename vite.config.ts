import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: 'https://www.joephela.com',
    plugins: [react()],
  }

  if (command === 'serve') {
    config.base = '/'
  }

  return config
})
