export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const loginSuccess = (token) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: token
    }
}

export const loginError = (error) => {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    }
}