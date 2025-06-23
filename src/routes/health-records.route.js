import express from 'express'
import healthRecordController from '../controllers/health-records.controller.js'
import validatorMiddleware from '../middlewares/validator.middleware.js'
import { schemaCreateHealth } from '../utils/schema-health.js'

const healthRecordsRouter = express.Router()

healthRecordsRouter.post('/', validatorMiddleware(schemaCreateHealth), healthRecordController.createHealthRecord)
healthRecordsRouter.get('/', healthRecordController.getAllHealthRecord)
healthRecordsRouter.get('/user', healthRecordController.getHealthRecordByUserId)
healthRecordsRouter.get('/:healthId', healthRecordController.getHealthRecordById)
healthRecordsRouter.patch('/:healthId', validatorMiddleware(schemaCreateHealth), healthRecordController.updateHealthRecordById)
healthRecordsRouter.delete('/:healthId', healthRecordController.deleteHealthRecordById)

export default healthRecordsRouter