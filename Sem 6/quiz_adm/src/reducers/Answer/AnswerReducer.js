import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AnswerTypes } from './../../actions/Answer/AnswerAction'

export const INITIAL_STATE = Immutable({
    newAnswer: { error: false, loading: false, answer: { text: '', correct: false } },
    deleteAnswer: { error: false, loading: false, answer: {} },
})

export const createAnswer = (state = INITIAL_STATE, action) => {
    return { ...state, newAnswer: { error: false, loading: true, answer: { text: '', correct: '' } } }
}

export const createSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, newAnswer: { error: false, loading: false, answer: action.answer } }
}

export const createError = (state = INITIAL_STATE, action) => {
    return { ...state, newAnswer: { error: true, loading: false, answer: { text: '', correct: '' } } }
}

export const deleteAnswer = (state = INITIAL_STATE, action) => {
    return { ...state, deleteAnswer: { error: false, loading: true, answer: {} } }
}

export const deleteAnswerSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, deleteAnswer: { error: false, loading: false, answer: action.answer } }
}

export const deleteAnswerError = (state = INITIAL_STATE, action) => {
    return { ...state, deleteAnswer: { error: true, loading: false, answer: {} } }
}

export const HANDLER = {
    [AnswerTypes.CREATE_ANSWER]: createAnswer,
    [AnswerTypes.CREATE_SUCCESS]: createSuccess,
    [AnswerTypes.CREATE_ERROR]: createError,
    [AnswerTypes.DELETE_ANSWER]: deleteAnswer,
    [AnswerTypes.DELETE_ANSWER_SUCCESS]: deleteAnswerSuccess,
    [AnswerTypes.DELETE_ANSWER_ERROR]: deleteAnswerError,
}

export default createReducer(INITIAL_STATE, HANDLER)