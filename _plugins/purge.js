import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'
import fs from 'fs'
import postCSS from 'postcss'
import glob from 'tiny-glob'
import MinifyCSS from 'clean-css'

import { extname, join } from 'node:path'

export async function purgePlugin(eleventyConfig) {
  eleventyConfig.on(
    'eleventy.after',
    async ({ directories, results, runMode, outputMode }) => {
      await purge(directories)
    }
  )
}

export async function purge(directories) {
  const inputDir = directories.output

  const requiredFiles = await glob('**/*.{html,css}', {
    cwd: join(process.cwd(), inputDir),
    absolute: true,
  })

  const cssFiles = []
  const htmlFiles = []

  for (let file of requiredFiles) {
    if (extname(file) === '.css') {
      cssFiles.push(file)
    }
    if (extname(file) === '.html') {
      htmlFiles.push(file)
    }
  }

  for (let file of cssFiles) {
    const sourceCSS = await fs.promises.readFile(file, 'utf8')
    const allCSS = await postCSS([
      purgeCSSPlugin({
        content: htmlFiles,
        variables: true,
        keyframes: true,
        defaultExtractor: content => content.match(/[\w-:./]+(?<!:)/g) || [],
      }),
    ])
      .process(sourceCSS, {
        from: file,
        to: file,
      })
      .catch(error => {
        console.log(error)
      })

    const minifiedCSS = new MinifyCSS().minify(allCSS.css).styles
    await fs.promises.writeFile(file, minifiedCSS, 'utf8')
  }
}
