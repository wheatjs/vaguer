import { createApp } from 'vue'
import { VaguerComponents } from '../src/main'
import App from './App.vue'

const app = createApp(App)
app.use(VaguerComponents)
app.mount('#app')
