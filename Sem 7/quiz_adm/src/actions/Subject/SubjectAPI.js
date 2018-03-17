import axios from 'axios'

const URL = 'http://localhost:3000'

export const createSubject = async (subject) => {
    const url = `${URL}/subjects`

    return await axios.post(url, { name: subject.name, description: subject.description || '' })
}

export const fetchSubjects = async () => {
    const url = `${URL}/subjects`

    return await axios.get(url)
}

export const deleteSubject = async (subject) => {
    const { _id } = subject
    const url = `${URL}/subjects/${_id}`

    return await axios.delete(url)
}