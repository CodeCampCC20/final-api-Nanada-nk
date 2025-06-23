import express from 'express'
import authenticate from '../middlewares/authenticate.middleware.js'

const healthRecordsRouter = express.Router()

healthRecordsRouter.post('/', authenticate)
healthRecordsRouter.get('/', authenticate)
healthRecordsRouter.get('/:id', authenticate)
healthRecordsRouter.patch('/:id', authenticate)
healthRecordsRouter.delete('/:id', authenticate)

export default healthRecordsRouter