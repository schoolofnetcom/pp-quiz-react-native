import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    login: null,
    loginSuccess: ['user'],
    loginError: ['error'],
})

export const AuthTypes = Types
export default Creators
