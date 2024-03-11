import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { Quasar, Notify, Dialog } from 'quasar'
import 'quasar/src/css/index.sass'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .use(Quasar, {
    plugins: { Notify, Dialog },
  })

app.mount('#app')
