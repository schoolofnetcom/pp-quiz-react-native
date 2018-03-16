import { default as AnswerActions } from './AnswerAction'
import { createAnswer, deleteAnswer } from './AnswerAPI'

export function thunkCreateAnswer(question) {
    return async (dispatch) => {
        dispatch(AnswerActions.createAnswer(true))
        try {
            let res = await createAnswer(question)
            dispatch(AnswerActions.createSuccess(res.data))
            // dispatch(thunkFetchSubjectList())
        } catch (err) {
            dispatch(AnswerActions.createAnswer(false))
            dispatch(AnswerActions.createError(true))
        }
    }
}

export function thunkDeleteAnswer(answer) {
    return async (dispatch) => {
        dispatch(AnswerActions.deleteAnswer(true))
        try {
            let res = await deleteAnswer(answer)
            dispatch(AnswerActions.deleteAnswerSuccess())
            // dispatch(thunkFetchQuestionList())
        } catch (err) {
            console.log(err)
            dispatch(AnswerActions.deleteAnswer(false))
            dispatch(AnswerActions.deleteAnswerError(true))
        }

    }
}