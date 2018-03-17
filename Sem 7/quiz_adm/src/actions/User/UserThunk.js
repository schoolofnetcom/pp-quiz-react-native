import { default as UserActions } from './UserAction'
import { createUser, fetchUsers, fetchUser, deleteUser, editUser } from './UserAPI'

export function thunkCreateUser(user) {
    return async (dispatch) => {
        dispatch(UserActions.createUser(true))
        try {
            let res = await createUser(user)
            dispatch(UserActions.createSuccess(res.data))
            dispatch(thunkFetchUserList())
        } catch (err) {
            dispatch(UserActions.createUser(false))
            dispatch(UserActions.createError(true))
        }
    }
}

export function thunkFetchUserList() {
    return async (dispatch) => {
        dispatch(UserActions.fetchUsers(true))
        try {
            let res = await fetchUsers()
            dispatch(UserActions.fetchUsersSuccess(res.data.users))
        } catch (err) {
            dispatch(UserActions.fetchUsers(false))
            dispatch(UserActions.fetchUsersError(true))
        }
    }
}

export function thunkFetchUser(id) {
    return async (dispatch) => {
        dispatch(UserActions.fetchUser(true))
        try {
            let res = await fetchUser(id)
            dispatch(UserActions.fetchUserSuccess(res.data.user))
        } catch (err) {
            dispatch(UserActions.fetchUser(false))
            dispatch(UserActions.fetchUserError(true))
        }
    }
}

export function thunkEditUser(user) {
    return async (dispatch) => {
        dispatch(UserActions.editUser(true))
        try {
            let res = await editUser(user)
            dispatch(UserActions.editUserSuccess(res.data))
            dispatch(thunkFetchUserList())
        } catch (err) {
            dispatch(UserActions.editUser(false))
            dispatch(UserActions.editUserError(true))
        }
    }
}