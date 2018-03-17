export const createUser = () => {
    return {
        type: 'CREATE_USER',
        payload: {}
    }
}

export const createUserSuccess = (user) => {
    return {
        type: 'CREATE_USER_SUCCESS',
        payload: user
    }
}

export const createUserError = (error) => {
    return {
        type: 'CREATE_USER_ERROR',
        payload: error
    }
}