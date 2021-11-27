export const saveRoomCode = (code) => localStorage.setItem('_roomCode', code) 
export const loadRoomCode = () => localStorage.getItem('_roomCode', code)