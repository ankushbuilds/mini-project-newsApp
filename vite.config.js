import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ❗ Replace 'mini-project-newsApp' with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/mini-project-newsApp/', // 👈 important for GitHub Pages
})