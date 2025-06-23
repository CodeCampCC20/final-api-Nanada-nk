import express from 'express'
import doctorController from '../controllers/doctors.controller.js'


const doctorsRouter = express.Router()

doctorsRouter.get('/me',doctorController.getMe)
doctorsRouter.patch('/me', doctorController.updateUsernameSpecialization)

export default doctorsRouter