import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/Expense-Tracker-app/" : "/",
// };
export default defineConfig({
  base: '/Expense-Tracker-app/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
