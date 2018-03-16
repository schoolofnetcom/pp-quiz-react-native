import { default as QuestionActions } from './QuestionAction'
import { createQuestion, fetchQuestions, deleteQuestion } from './QuestionAPI'

export function thunkCreateQuestion(question) {
    return async (dispatch) => {
        dispatch(QuestionActions.createQuestion(true))
        try {
            let res = await createQuestion(question)
            dispatch(QuestionActions.createSuccess(res.data))
            dispatch(thunkFetchSubjectList())
        } catch (err) {
            dispatch(QuestionActions.createQuestion(false))
            dispatch(QuestionActions.createError(true))
        }
    }
}

export function thunkFetchQuestionList() {
    return async (dispatch) => {
        dispatch(QuestionActions.fetchQuestions(true))
        try {
            let res = await fetchQuestions()
            dispatch(QuestionActions.fetchQuestionsSuccess(res.data.questions))
        } catch (err) {
            dispatch(QuestionActions.fetchQuestions(false))
            dispatch(QuestionActions.fetchQuestionsError(true))
        }
    }
}

export function thunkDeleteQuestion(question) {
    return async (dispatch) => {
        dispatch(QuestionActions.deleteQuestion(true))
        try {
            let res = await deleteQuestion(question)
            dispatch(QuestionActions.deleteQuestionSuccess())
            dispatch(thunkFetchQuestionList())
        } catch (err) {
            dispatch(QuestionActions.deleteQuestion(false))
            dispatch(QuestionActions.deleteQuestionError(true))
        }

    }
}