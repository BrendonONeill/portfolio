import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        animidata: resolve(__dirname, 'animidata.html'),
        bugtracking: resolve(__dirname, 'bugtracking.html'),
        csshelper: resolve(__dirname, 'csshelper.html'),
        design: resolve(__dirname, 'design.html'),
        ffvii: resolve(__dirname, 'ffvii.html'),
        gamerdata: resolve(__dirname, 'gamerdata.html'),
        kanjistudy: resolve(__dirname, 'kanjistudy.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
      }
    }
  }
})
