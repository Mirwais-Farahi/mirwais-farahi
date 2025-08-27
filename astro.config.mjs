// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://mirwais-farahi.github.io',
  base: '/',   // no subpath
  integrations: [mdx(), sitemap(), tailwind()]
})
