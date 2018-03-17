export const fecthSubjects = () => {
    return {
        type: 'FETCH_SUBJECTS',
        payload: {}
    }
}

export const fecthSubjectsSuccess = (subjects) => {
    return {
        type: 'FETCH_SUBJECTS_SUCCESS',
        payload: subjects
    }
}

export const fecthSubjectsError = (error) => {
    return {
        type: 'FETCH_SUBJECTS_ERROR',
        payload: error
    }
}