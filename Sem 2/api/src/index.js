import subjects from './subjects/index'

export default (app) => {
    app.use('/subjects', subjects)
}