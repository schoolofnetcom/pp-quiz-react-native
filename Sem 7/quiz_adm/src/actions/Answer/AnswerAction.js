import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    createAnswer: null,
    createSuccess: ['answer'],
    createError: ['error'],
    deleteAnswer: null,
    deleteAnswerSuccess: null,
    deleteAnswerError: ['error']
})

export const AnswerTypes = Types
export default Creators
