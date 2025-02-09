import { EleventyHtmlBasePlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}
