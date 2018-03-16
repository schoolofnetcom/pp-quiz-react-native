import { combineReducers } from 'redux'
import Subject from './Subject'
import User from './User'
import Question from './Question'
import Answer from './Answer'

export default combineReducers({
    subjectStore: Subject,
    userStore: User,
    questionStore: Question,
    answerStore: Answer
})