import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Chọn cổng chạy server
    proxy: {
      '/api': 'http://localhost:5000', // Proxy cho backend
    },
  }
})
