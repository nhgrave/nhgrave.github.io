import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/styles/breakpoints.scss" as *;`
      }
    }
  },
})
