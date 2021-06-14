import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import esm2cjs from './plugins/vitejs-plugin-electron'
const { join } = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: join(__dirname, ".env") })
const root = join(__dirname, "src/render")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // esm2cjs()
  ],
  root,
  base: "./",
  server: {
    port: +process.env.PORT
  },
  resolve: {
    alias: {
      "@render": join(__dirname, "src/render"),
      "@main": join(__dirname, "src/main"),
      "@src": join(__dirname, "src"),
      "@root": __dirname
    }
  },
  build: {
    outDir: join(__dirname, "dist/render"),
    emptyOutDir: true,
    minify: false,
    commonjsOptions: {},
    assetsDir: "",
    sourcemap: true
  }
})
