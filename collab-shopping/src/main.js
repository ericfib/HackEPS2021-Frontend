import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./index.js"
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import { apiUrl } from './utils/backend-api';
const myApi = axios.create()
const app = createApp(App)

export const SocketInstance = socketio(apiUrl);


app.use(router)
app.mount('#app')
app.use((new VueSocketIO({
    debug: true,
    connection: SocketInstance
})))