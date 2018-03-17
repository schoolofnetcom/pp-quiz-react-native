import { login, loginSuccess, loginError } from './authActions'
import { loginAPI } from './authAPI'
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from 'react-native'

export function thunkLogin(user) {
    return async (dispatch) => {
        dispatch(login(user, true))
        try {
            let res = await loginAPI(user)
            dispatch(loginSuccess(res.data))
            await AsyncStorage.setItem('user', res.data.token)
            dispatch(NavigationActions.navigate({ routeName: 'List' }))
        } catch (err) {
            dispatch(login({}, false))
            dispatch(loginError(true))
        }
    }
}