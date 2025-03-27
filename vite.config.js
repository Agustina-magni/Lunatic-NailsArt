import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Lunatic-NailsArt/', // 👈 ¡Agregá esta línea!
  plugins: [react()],
})
