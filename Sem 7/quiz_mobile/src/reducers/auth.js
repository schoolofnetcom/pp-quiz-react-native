const INITIAL_STATE = {
    userLogin: { user: { email: '', password: '' }, loading: false, error: false }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, userLogin: { error: false, loading: true, user: action.payload } }
            break
        case 'CREATE_USER_SUCCESS':
            return { ...state, userLogin: { error: false, loading: false, user: action.payload } }
            break
        case 'CREATE_USER_ERROR':
            return { ...state, userLogin: { error: true, loading: false, user: { email: '', password: '' } } }
            break
        default:
            return state
            break
    }
}