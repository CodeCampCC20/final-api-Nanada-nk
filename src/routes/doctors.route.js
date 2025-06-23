import express from 'express'
import doctorController from '../controllers/doctors.controller.js'
import authenticateDoctor from '../middlewares/authenticateDoctor.middleware.js'

const doctorsRouter = express.Router()

doctorsRouter.get('/me', authenticateDoctor,doctorController.getMe)
doctorsRouter.patch('/me', authenticateDoctor, doctorController.updateUsernameSpecialization)

export default doctorsRouter