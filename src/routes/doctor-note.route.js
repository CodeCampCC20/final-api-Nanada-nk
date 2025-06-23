import express from 'express'
import validatorMiddleware from '../middlewares/validator.middleware.js'
import { schemaCreateDoctorNote } from '../utils/schema-doctor-note.js'
import authenticate from '../middlewares/authenticate.middleware.js'
import authenticateDoctor from '../middlewares/authenticateDoctor.middleware.js'
import doctorNoteController from '../controllers/doctor-notes.controller.js'

const doctorNoteRouter = express.Router()

doctorNoteRouter.post('/',authenticateDoctor ,validatorMiddleware(schemaCreateDoctorNote),doctorNoteController.createDoctorNote)
doctorNoteRouter.get('/my-notes',authenticateDoctor,doctorNoteController.getAllDoctorNote)
doctorNoteRouter.get('/user/:userId',authenticateDoctor,doctorNoteController.getDoctorNoteById)
doctorNoteRouter.get('/received',authenticate,doctorNoteController.getDoctorNoteReceived)
doctorNoteRouter.patch('/:noteId',authenticateDoctor,validatorMiddleware(schemaCreateDoctorNote),doctorNoteController.updateDoctorNoteById)
doctorNoteRouter.delete('/:noteId',authenticateDoctor,doctorNoteController.deleteDoctorNoteById)

export default doctorNoteRouter