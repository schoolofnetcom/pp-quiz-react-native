import axios from 'axios'

const URL = 'http://10.0.3.2:3000'

export const subjectListAPI = async () => {
    const url = `${URL}/subjects`

    return await axios.get(url)
}