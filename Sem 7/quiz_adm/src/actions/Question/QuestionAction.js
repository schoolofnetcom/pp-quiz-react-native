import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    createQuestion: null,
    createSuccess: ['question'],
    createError: ['error'],
    fetchQuestions: null,
    fetchQuestionsSuccess: ['questions'],
    fetchQuestionsError: ['error'],
    deleteQuestion: null,
    deleteQuestionSuccess: null,
    deleteQuestionError: ['error']
})

export const QuestionTypes = Types
export default Creators
