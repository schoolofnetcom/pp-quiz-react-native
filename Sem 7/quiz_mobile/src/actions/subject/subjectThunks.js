import { fecthSubjects, fecthSubjectsSuccess, fecthSubjectsError } from './subjectActions'
import { subjectListAPI } from './subjectAPI'

export function thunkFetchAllSubject() {
    return async (dispatch) => {
        dispatch(fecthSubjects(true))
        try {
            let res = await subjectListAPI()
            dispatch(fecthSubjectsSuccess(res.data.subjects))
        } catch (err) {
            dispatch(fecthSubjects(false))
            dispatch(fecthSubjectsError(true))
        }
    }
}