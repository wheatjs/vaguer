const components = import.meta.globEager('./**/*.vue')

const exportable: any = {}

function getName(key: string) {
  return key.substring(location.pathname.lastIndexOf('/') + 2).split('.vue')[0]
}

Object.entries(components).forEach(([key, value]) => {
  exportable[getName(key)] = value.default
})

export default exportable
