import { combineReducers } from 'redux'
import Subject from './Subject'
import User from './User'

export default combineReducers({
    subjectStore: Subject,
    userStore: User
})