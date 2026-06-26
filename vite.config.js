import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        const isRekaPureAnnotationWarning =
          warning.id?.includes('node_modules/reka-ui/dist/shared/createContext.js') &&
          warning.message.includes('contains an annotation')

        if (isRekaPureAnnotationWarning) {
          return
        }

        defaultHandler(warning)
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
