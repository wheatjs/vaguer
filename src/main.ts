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

// START_EXPORTS
export { default as VaguerButton } from './components/VaguerButton.vue'
// END_EXPORTS
