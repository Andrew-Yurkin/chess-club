import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    viteImagemin({
      mozjpeg: {
        quality: 55,
        progressive: true,
      },

      optipng: {
        optimizationLevel: 3,
      },

      pngquant: {
        quality: [0.5, 0.7],
        speed: 1,
      },

      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },

      webp: {
        quality: 70,
      },

      avif: {
        quality: 50,
      },
    }),
  ],
  base: '/chess-club/',
})
