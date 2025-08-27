// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://mirwais-farahi.github.io', // lowercase is fine
  base: '/mirwais-farahi',                  // <-- add this (repo name)
  integrations: [mdx(), sitemap(), tailwind()]
})
