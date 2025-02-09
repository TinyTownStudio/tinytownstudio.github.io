import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import { purge } from './_lib/purge.js';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/shed-css/dist/index.css':
      '/node_modules/shed-css/dist/index.css',
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.on(
    'eleventy.after',
    async ({ directories, results, runMode, outputMode }) => {
      await purge(directories);
    }
  );
}
