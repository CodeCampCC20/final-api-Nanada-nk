import doctorService from "../services/doctors.service.js"


const doctorController = {}

doctorController.getMe = async (req, res, next) => {
  try {
    const id = Number(req.user.id)

    const doctor = await doctorService.getDoctorById(id)
    console.log('doctor', doctor)

    if (!doctor) return res.status(404).json({ success: false, message: "Resource not found" })

    res.status(200).json({ success: true, doctor })

  } catch (error) {
    next(error)
  }
}

doctorController.updateUsernameSpecialization = async (req, res, next) => {
  try { //specialization
    const id = Number(req.user.id)
    const { username , specialization } = req.body

    const updateDoctor = await doctorService.updateUsernameSpecialization({id,username,specialization})
    if(!updateDoctor) {
      return res.status(404).json({success: false, message: "Resource not found"})
    }
    res.status(200).json({ success: true, updateDoctor })
  } catch (error) {
    next(error)
  }
}

export default doctorController