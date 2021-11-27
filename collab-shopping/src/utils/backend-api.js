import axios from 'axios'
import { loadRoomCode } from './storage'

export default axios.create({
    baseURL : '192.168.43.227:4000',
    headers: {
        'authorization' : loadRoomCode()
    }
})