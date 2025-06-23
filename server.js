import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorMiddleware from './src/middlewares/error.middleware.js'
import notFoundMiddleware from './src/middlewares/not-found.middleware.js'
import authRouter from './src/routes/auth.route.js'
import usersRouter from './src/routes/users.route.js'
import doctorsRouter from './src/routes/doctors.route.js'
import authenticate from './src/middlewares/authenticate.middleware.js'
import authenticateDoctor from './src/middlewares/authenticateDoctor.middleware.js'
import healthRecordsRouter from './src/routes/health-records.route.js'
import doctorNoteRouter from './src/routes/doctor-note.route.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use('/auth', authRouter)
app.use('/users', authenticate, usersRouter)
app.use('/doctors', authenticateDoctor, doctorsRouter)
app.use('/health-records', authenticate, healthRecordsRouter)
app.use('/doctor-notes', doctorNoteRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server run port http://localhost:${PORT}`))