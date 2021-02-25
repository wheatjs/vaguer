import type { Plugin } from 'vue'

import components from './components'
export default components

export const VaguerComponents: Plugin = {
  install(app) {
    Object.entries(components).forEach(([key, value]: [string, any]) => {
      app.component(key, value)
    })
  },
}
