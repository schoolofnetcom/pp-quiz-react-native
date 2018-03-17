import axios from 'axios'

const URL = 'http://localhost:3000'

export const createAnswer = async (answer) => {
    const url = `${URL}/questions/${answer.question}/answers`

    return await axios.post(url, { text: answer.text, correct: answer.correct })
}

export const deleteAnswer = async (answer) => {
    const { _id } = answer
    const url = `${URL}/questions/${answer.question}/answers/${_id}`

    return await axios.delete(url)
}