import axios from 'axios'
import { loadRoomCode } from './storage'

export const myApi = axios.create({
    baseURL : 'http://192.168.43.227:4000',
    headers: {
        'authorization' : loadRoomCode()
    }
})