import { default as AuthActions } from './AuthAction'
import { login } from './AuthAPI'
import { history } from './../../routes'

export function thunkLogin(user) {
    return async (dispatch) => {
        dispatch(AuthActions.login(true))
        try {
            let res = await login(user)
            dispatch(AuthActions.loginSuccess(res.data))
            localStorage.setItem('user', res.data.token)
            history.push('/dashboard')
        } catch (err) {
            console.log('asdsada', err)
            dispatch(AuthActions.login(false))
            dispatch(AuthActions.loginError(true))
        }
    }
}
