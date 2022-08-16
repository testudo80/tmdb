import { api } from './api.js'

export const getUsers = async () => {
    const { data } = await api.get('/users')
    return data
}