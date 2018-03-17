import { combineReducers } from 'redux'

import nav from './nav'
import user from './user'
import auth from './auth'
import subject from './subject'

export default combineReducers({
    nav,
    user,
    auth,
    subject
})