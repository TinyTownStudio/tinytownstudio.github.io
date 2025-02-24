import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import { purgePlugin } from './_plugins/purge.js'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
  })
  eleventyConfig.addPassthroughCopy({
    './node_modules/shed-css/dist/index.css':
      '/node_modules/shed-css/dist/index.css',
  })
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(purgePlugin)
}
