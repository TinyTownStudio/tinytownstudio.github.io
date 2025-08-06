import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import { purgePlugin } from './_plugins/purge.js'
import MarkdownIt from 'markdown-it'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
  })

  eleventyConfig.addFilter('markdown', function (value) {
    let markdown = MarkdownIt({
      html: true,
    })
    return markdown.render(value)
  })

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(purgePlugin)
}
