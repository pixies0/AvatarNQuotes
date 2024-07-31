import axios from 'axios'

export const avatarAPI = 'https://api.dicebear.com/9.x/'
export const animeAPI = axios.create({
  baseURL: 'https://animechan.vercel.app/api/'
})
