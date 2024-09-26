import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/styles/button.css'
import './assets/styles/input.css'
import './assets/styles/task.css'
import './assets/styles/redactModal.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
