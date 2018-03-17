import express from 'express'
import token from './token'
const router = express.Router()

router.post('/', token)

export default router