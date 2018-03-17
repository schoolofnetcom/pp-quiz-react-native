import axios from 'axios'

const URL = 'http://10.0.3.2:3000'

export const loginAPI = async (user) => {
    const url = `${URL}/auth`

    return await axios.post(url, { email: user.email, password: user.password })
}