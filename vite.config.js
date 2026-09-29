import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const siteUrl = (
  process.env.VITE_SITE_URL || 'https://portfolioyairleon.xyairx1.workers.dev'
).replace(/\/$/, '')

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml(html) {
        return html.replaceAll('%SITE_URL%', siteUrl)
      },
    },
    {
      name: 'spa-fallback',
      apply: 'build',
      closeBundle() {
        const dist = path.resolve('dist')
        const index = path.join(dist, 'index.html')
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, path.join(dist, '404.html'))
        }
      },
    },
  ],
})
