import path, { join } from 'node:path'

export default api => {
  const actions = [prettify(api), packageSync(api)].filter(Boolean)
  return actions
}

function prettify(api) {
  const prettierFiles = api.filenames
    .filter(file =>
      ['.js', '.css', '.njk', '.html', '.json'].includes(path.extname(file))
    )
    .join(' ')
  return prettierFiles.length > 0 ? `prettier --write ${prettierFiles}` : ``
}

function packageSync(api) {
  const hasPackageJSON = api.filenames
    .map(d => join(d.replace(process.cwd(), '.')))
    .some(d => d === 'package.json')
  return hasPackageJSON ? `pnpm dedupe` : null
}
