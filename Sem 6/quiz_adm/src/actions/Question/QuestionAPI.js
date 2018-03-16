import axios from 'axios'

const URL = 'http://localhost:3000'

export const createQuestion = async (question) => {
    const url = `${URL}/questions`

    return await axios.post(url, { text: question.text, subject: question.subject || '' })
}

export const fetchQuestions = async () => {
    const url = `${URL}/questions`

    return await axios.get(url)
}

export const deleteQuestion = async (question) => {
    const { _id } = question
    const url = `${URL}/questions/${_id}`

    return await axios.delete(url)
}