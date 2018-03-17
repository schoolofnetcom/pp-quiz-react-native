import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    createUser: null,
    createSuccess: ['user'],
    createError: ['error'],
    fetchUsers: null,
    fetchUsersSuccess: ['users'],
    fetchUsersError: ['error'],
    fetchUser: ["id"],
    fetchUserSuccess: ['user'],
    fetchUserError: ['error'],    
    editUser: null,
    editUserSuccess: null,
    editUserError: ['error']
})

export const UserTypes = Types
export default Creators
