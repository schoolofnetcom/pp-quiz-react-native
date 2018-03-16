import axios from 'axios'
import getAuthHeader from './AuthHeader'

const URL = 'http://localhost:3000'

export const login = async (user) => {
    const url = `${URL}/auth`
    
    return await axios.post(url, { email: user.email, password: user.password })
}


export const fakeRequest = async (user) => {
    const url = `${URL}/auth`

    return await axios.post(url, { email: user.email, password: user.password }, { headers: getAuthHeader() })
}
