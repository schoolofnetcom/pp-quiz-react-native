import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './src/index'

const app = express()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(cors())

routes(app)

mongoose.connect('mongodb://localhost:27017/quiz_app')

app.listen(PORT, HOST, () => console.log(`Express has been started at ${HOST}:${PORT}`))