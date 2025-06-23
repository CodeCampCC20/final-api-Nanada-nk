import express from 'express'
import authenticate from '../middlewares/authenticate.middleware.js'
import userController from '../controllers/users.controller.js'

const usersRouter = express.Router()

usersRouter.get('/me', authenticate,userController.getMe)
usersRouter.patch('/me', authenticate , userController.updateUsername)

export default usersRouter