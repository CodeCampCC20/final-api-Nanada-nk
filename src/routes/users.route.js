import express from 'express'
import userController from '../controllers/users.controller.js'

const usersRouter = express.Router()

usersRouter.get('/me', userController.getMe)
usersRouter.patch('/me', userController.updateUsername)

export default usersRouter