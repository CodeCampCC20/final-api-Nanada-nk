import express from 'express'
import authenticateDoctor from '../middlewares/authenticateDoctor.middleware.js'

const doctorNoteRouter = express.Router()

doctorNoteRouter.post('/', authenticateDoctor)
doctorNoteRouter.get('/', authenticateDoctor)
doctorNoteRouter.get('/user/:userId', authenticateDoctor)
doctorNoteRouter.get('/received', authenticateDoctor)
doctorNoteRouter.patch('/:id', authenticateDoctor)
doctorNoteRouter.delete('/:id', authenticateDoctor)

export default doctorNoteRouter