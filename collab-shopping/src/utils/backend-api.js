import axios from 'axios'
import { loadRoomCode } from './storage'

export const apiUrl = 'http://192.168.43.227:4000';

export const myApi = axios.create({
    baseURL : apiUrl,
    headers: {
        'authorization' : loadRoomCode()
    }
})