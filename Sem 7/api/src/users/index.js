import express from 'express'
import create from './create'
import list from './list'
import show from './show'
import update from './update'
const router = express.Router()

router.post('/', create)
router.get('/', list)
router.get('/:id', show)
router.put('/:id', update)
router.patch('/:id', update)

export default router