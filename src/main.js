import { createApp } from 'vue'
import App from './App.vue'

import routes from './routes/routes'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(routes).mount('#app')
