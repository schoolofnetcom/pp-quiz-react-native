import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AuthTypes } from './../../actions/Auth/AuthAction'

export const INITIAL_STATE = Immutable({
    login: { error: false, loading: false, user: { email: '', password: '' } }
})

export const login = (state = INITIAL_STATE, action) => {
    return { ...state, login: { error: false, loading: true, user: { email: '', password: '' } } }
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, login: { error: false, loading: false, user: action.user } }
}

export const loginError = (state = INITIAL_STATE, action) => {
    return { ...state, login: { error: true, loading: false, user: { email: '', password: '' } } }
}

export const HANDLER = {
    [AuthTypes.LOGIN]: login,
    [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthTypes.LOGIN_ERROR]: loginError
}

export default createReducer(INITIAL_STATE, HANDLER)