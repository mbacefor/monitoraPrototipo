import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/mongo': {
        target: 'https://sa-east-1.aws.data.mongodb-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/mongo', ''),
      },
    },
    cors: true, // Habilita CORS para todas as origens
  },

  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
})
