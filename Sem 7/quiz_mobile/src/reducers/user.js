const INITIAL_STATE = {
    createUser: { user: { name : '', email: '', password: '' }, loading: false, error: false }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return { ...state, createUser: { error: false, loading: true, user: { name : '', email: '', password: '' }} }
        break
        case 'CREATE_USER_SUCCESS': 
            return { ...state, createUser: { error: false, loading: false, user: action.payload }}
        break
        case 'CREATE_USER_ERROR':
            return { ...state, createUser: { error: true, loading: false, user: { name : '', email: '', password: '' }} }
        break
        default:
            return state
        break
    }
}