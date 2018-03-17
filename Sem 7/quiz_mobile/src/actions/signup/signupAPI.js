import axios from 'axios'

const URL = 'http://10.0.3.2:3000'

export const createUserAPI = async (user) => {
    const url = `${URL}/users`

    return await axios.post(url, { name: user.name, email: user.email, password: user.password })
}