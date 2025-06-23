import healthRecordService from "../services/health-records.service.js"

const healthRecordController = {}

healthRecordController.createHealthRecord = async (req, res, next) => {
  try {
    const { type, value } = req.body
    const userId = req.user.id

    const newHealthRecord = await healthRecordService.createHealthRecord({ type, value, userId })
    // console.log('newHealthRecord', newHealthRecord)

    res.status(201).json({ success: true,healthRecord: newHealthRecord, message: "Create Health Record Successfully" })
  } catch (error) {
    next(error)
  }
}

healthRecordController.getAllHealthRecord = async (req, res, next) => {
  try {
    const allHealthRecord = await healthRecordService.getAllHealthRecord()
    // console.log('allHealthRecord', allHealthRecord)

    res.status(200).json({ success: true,healthRecords: allHealthRecord })

  } catch (error) {
    next(error)
  }
}

healthRecordController.getHealthRecordByUserId = async (req, res, next) => {
  try {
    const userId = req.user.id

    const allHealthRecord = await healthRecordService.getAllHealthRecordByUserId(userId)
    // console.log('allHealthRecord', allHealthRecord)

    res.status(200).json({ success: true,healthRecord: allHealthRecord })

  } catch (error) {
    next(error)
  }
}

healthRecordController.getHealthRecordById = async (req, res, next) => {
  try {
    const { healthId } = req.params
    const userId = req.user.id

    const allHealthRecord = await healthRecordService.getHealthRecordById({ healthId, userId })
    if (!allHealthRecord) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true,healthRecord: allHealthRecord })

  } catch (error) {
    next(error)
  }
}

healthRecordController.updateHealthRecordById = async (req, res, next) => {
  try {
    const { healthId } = req.params
    const { type, value } = req.body
    const userId = req.user.id

    const updatedHealthRecord = await healthRecordService.updateHealthRecordById({ healthId, type, value, userId })
    if (!updatedHealthRecord) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true,healthRecord: updatedHealthRecord })
  } catch (error) {
    next(error)
  }
}

healthRecordController.deleteHealthRecordById = async (req, res, next) => {
  try {
    const { healthId } = req.params
    const userId = req.user.id

    const deletedHealthRecord = await healthRecordService.deleteHealthRecordById({ healthId, userId })
    if (!deletedHealthRecord) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true, message: 'Health Record deleted successfully' })
  } catch (error) {
    next(error)
  }
}

export default healthRecordController