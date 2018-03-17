import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    createSubject: null,
    createSuccess: ['subject'],
    createError: ['error'],
    fetchSubjects: null,
    fetchSubjectsSuccess: ['subjects'],
    fetchSubjectsError: ['error'],
    deleteSubject: null,
    deleteSubjectSuccess: null,
    deleteSubjectError: ['error']
})

export const SubjectTypes = Types
export default Creators
