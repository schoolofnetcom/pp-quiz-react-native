import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { QuestionTypes } from './../../actions/Question/QuestionAction'

export const INITIAL_STATE = Immutable({
    newQuestion: { error: false, loading: false, question: { text: '', subject: '' } },
    questionList: { error: false, loading: false, questions: [] },
    deleteQuestion: { error: false, loading: false, question: {} },
})

export const createQuestion = (state = INITIAL_STATE, action) => {
    return { ...state, newQuestion: { error: false, loading: true, subject: { text: '', subject: '' } } }
}

export const createSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, newQuestion: { error: false, loading: false, subject: action.question } }
}

export const createError = (state = INITIAL_STATE, action) => {
    return { ...state, newQuestion: { error: true, loading: false, subject: { text: '', subject: '' } } }
}

export const fetchQuestions = (state = INITIAL_STATE, action) => {
    return { ...state, questionList: { error: false, loading: true, questions: [] } }
}

export const fetchQuestionsSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, questionList: { error: false, loading: false, questions: action.questions } }
}

export const fetchQuestionsError = (state = INITIAL_STATE, action) => {
    return { ...state, questionList: { error: true, loading: false, questions: [] } }
}

export const deleteQuestion = (state = INITIAL_STATE, action) => {
    return { ...state, deleteQuestion: { error: false, loading: true, question: {} } }
}

export const deleteQuestionSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, deleteQuestion: { error: false, loading: false, question: action.question } }
}

export const deleteQuestionError = (state = INITIAL_STATE, action) => {
    return { ...state, deleteQuestion: { error: true, loading: false, question: {} } }
}

export const HANDLER = {
    [QuestionTypes.CREATE_QUESTION]: createQuestion,
    [QuestionTypes.CREATE_SUCCESS]: createSuccess,
    [QuestionTypes.CREATE_ERROR]: createError,
    [QuestionTypes.FETCH_QUESTIONS]: fetchQuestions,
    [QuestionTypes.FETCH_QUESTIONS_SUCCESS]: fetchQuestionsSuccess,
    [QuestionTypes.FETCH_QUESTIONS_ERROR]: fetchQuestionsError,
    [QuestionTypes.DELETE_QUESTION]: deleteQuestion,
    [QuestionTypes.DELETE_QUESTION_SUCCESS]: deleteQuestionSuccess,
    [QuestionTypes.DELETE_QUESTION_ERROR]: deleteQuestionError,
}

export default createReducer(INITIAL_STATE, HANDLER)