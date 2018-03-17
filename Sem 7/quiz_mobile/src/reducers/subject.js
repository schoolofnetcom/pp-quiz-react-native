const INITIAL_STATE = {
    listSubject: { subjects: [] , loading: false, error: false }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_SUBJECTS':
            return { ...state, listSubject: { error: false, loading: true, subjects: [] }}
            break
        case 'FETCH_SUBJECTS_SUCCESS':
            return { ...state, listSubject: { error: false, loading: false, subjects: action.payload } }
            break
        case 'FETCH_SUBJECTS_ERROR':
            return { ...state, listSubject: { error: true, loading: false, subjects: [] }}
            break
        default:
            return state
            break
    }
}