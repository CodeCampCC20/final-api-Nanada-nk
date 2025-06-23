import express from 'express'
import authController from '../controllers/auth.controller.js'
import validatorMiddleware from '../middlewares/validator.middleware.js'
import { schemaRegisterForDoctor, schemaRegisterForUser } from '../utils/schema-auth.js'

const authRouter = express.Router()

authRouter.post('/register/doctor',validatorMiddleware(schemaRegisterForDoctor) ,authController.registerDoctor)
authRouter.post('/register/user',validatorMiddleware(schemaRegisterForUser) ,authController.registerUser)
authRouter.post('/login/user', authController.login)
authRouter.post('/login/doctor', authController.loginDoctor)

export default authRouter