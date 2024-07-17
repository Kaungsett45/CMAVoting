import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import app from './src/server/dbmsquery'

function expressPlugin() {
  return {
    name: 'express-plugin',
    configureServer(server) {
      server.middlewares.use(app)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), expressPlugin()],
})