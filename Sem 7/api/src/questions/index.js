import express from 'express'
import list from './list'
import create from './create'
import remove from './remove'
import removeAnswers from './removeAnswers'
import createAnswer from './createAnswer'
const router = express.Router()

router.get('/', list)
router.post('/', create)
router.delete('/:id/answers/:idAnswer', removeAnswers)
router.post('/:id/answers', createAnswer)
router.put('/:id/answers', createAnswer)
router.delete('/:id', remove)

export default router