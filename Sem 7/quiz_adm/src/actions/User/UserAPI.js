import axios from 'axios'

const URL = 'http://localhost:3000'

export const createUser = async (user) => {
    const url = `${URL}/users`

    return await axios.post(url, { name: user.name, email: user.email, password: user.password })
}

export const fetchUsers = async () => {
    const url = `${URL}/users`

    return await axios.get(url)
}

export const fetchUser = async (id) => {
    const url = `${URL}/users/${id}`

    return await axios.get(url)
}

export const editUser = async (user) => {
    let { _id } = user
    const url = `${URL}/users/${_id}`

    return await axios.put(url, { name: user.name, email: user.email, password: user.password, active: user.active })
}