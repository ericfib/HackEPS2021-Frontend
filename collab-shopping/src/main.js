import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'



import router from "./index.js"
const myApi = axios.create()
const app = createApp(App)

app.use(router)

app.mount('#app')
