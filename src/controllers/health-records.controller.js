const healthRecordController = {}

healthRecordController.createHealth = async (req,res,next) => {
  try {
    const {} = req.body
  } catch (error) {
    next(error)
  }
}

export default healthRecordController