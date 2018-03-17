import { createUser, createUserSuccess, createUserError } from './signupActions'
import { createUserAPI } from './signupAPI'

export function thunkCreateUser(user) {
    return async(dispatch) => {
        dispatch(createUser(true))
        try {
            let res = await createUserAPI(user)
            dispatch(createUserSuccess(res.data))
        } catch(err) {
            dispatch(createUser(false))
            dispatch(createUserError(true))
        }
    }
}