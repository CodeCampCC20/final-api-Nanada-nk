import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorMiddleware from './src/middlewares/error.middleware.js'
import notFoundMiddleware from './src/middlewares/not-found.middleware.js'
import authRouter from './src/routes/auth.route.js'
import usersRouter from './src/routes/users.route.js'
import doctorsRouter from './src/routes/doctors.route.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/doctors', doctorsRouter)
app.use('/health-records', () => { })
app.use('/doctor-notes', () => { })

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server run port http://localhost:${PORT}`))