const path = require('path')
const fs = require('fs')
const fg = require('fast-glob')

const rootDir = path.resolve(__dirname, '..')
const entry = path.resolve(rootDir, 'src')
const entryFile = path.resolve(entry, 'main.ts')
const components = path.resolve('src', 'components')

async function getComponents(path) {
  const files = await fg(`${path}/**/*.(vue)`, {
    cwd: rootDir,
    ignore: [
      '_*',
      'dist',
      'node_modules',
    ],
  })

  files.sort()
  return files
}

async function autoExport() {
  const START = '// START_EXPORTS'
  const END = '// END_EXPORTS'
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const exports = (await getComponents(components)).map((p) => {
    const name = path.basename(p).split('.')[0]
    const relativePath = path.relative(entry, p)
    return `export { default as ${name} } from './${relativePath}'`
  }).join('\n')

  const code = fs.readFileSync(entryFile, 'utf8')
  const target = exports ? `${START}\n${exports}\n${END}` : `${START}${END}`

  fs.writeFileSync(entryFile, code.replace(regex, target))
}

autoExport()
