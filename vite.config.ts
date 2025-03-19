import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const basename = "/EroxShoppingWebsite/"; // Set your GitHub repo name

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename, // Set the base to match your GitHub repo name

})
