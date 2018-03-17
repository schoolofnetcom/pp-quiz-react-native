import subjects from './subjects/index'
import questions from './questions/index'
import users from './users/index'
import auth from './auth/index'

export default (app) => {
    app.use('/subjects', subjects)
    app.use('/questions', questions)
    app.use('/users', users)
    app.use('/auth', auth)
}