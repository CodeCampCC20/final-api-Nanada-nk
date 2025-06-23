import doctorNoteService from "../services/doctor-notes.service"

const doctorNoteController = {}

doctorNoteController.createDoctorNote = async (req, res, next) => {
  try {
    const { note } = req.body
    const doctorId = req.user.id
    const userId = req.user.id

    const newDoctorNote = await doctorNoteService.createDoctorNote({ doctorId, userId, note })

    res.status(201).json({ success: true, DoctorNote: newDoctorNote, message: "create doctor notes successfully" })
  } catch (error) {
    next(error)
  }
}


doctorNoteController.getAllDoctorNote = async (req, res, next) => {
  try {
    const allDoctorNote = await doctorNoteService.getAllDoctorNote()


    res.status(200).json({ success: true, DoctorNotes: allDoctorNote })

  } catch (error) {
    next(error)
  }
}

doctorNoteController.getDoctorNoteById = async (req, res, next) => {
  try {
    const { noteId } = req.params
    const doctorId = req.user.id
    const userId = req.user.id

    const allDoctorNote = await doctorNoteService.getDoctorNoteById({ noteId, doctorId, userId, })
    if (!allDoctorNote) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true, DoctorNote: allDoctorNote })

  } catch (error) {
    next(error)
  }
}

doctorNoteController.getDoctorNoteReceived = async (req, res, next) => {
  try {
    const { noteId } = req.params
    const doctorId = req.user.id
    const userId = req.user.id

    const allDoctorNote = await doctorNoteService.getDoctorNoteReceived({ noteId, doctorId, userId, })
    if (!allDoctorNote) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true, DoctorNote: allDoctorNote })

  } catch (error) {
    next(error)
  }
}

doctorNoteController.updateDoctorNoteById = async (req, res, next) => {
  try {
    const { noteId } = req.params
    const { note } = req.body
    const doctorId = req.user.id
    const userId = req.user.id

    const updatedDoctorNote = await doctorNoteService.updateDoctorNoteById({ noteId, doctorId, userId, note })
    if (!updatedDoctorNote) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true, DoctorNote: updatedDoctorNote })
  } catch (error) {
    next(error)
  }
}

doctorNoteController.deleteDoctorNoteById = async (req, res, next) => {
  try {
    const { noteId } = req.params
    const doctorId = req.user.id
    const userId = req.user.id

    const deletedDoctorNote = await doctorNoteService.deleteDoctorNoteById({ noteId, doctorId, userId })
    if (!deletedDoctorNote) {
      return res.status(404).json({ success: false, message: 'Resource not found' })
    }

    res.status(200).json({ success: true, message: 'Doctor Note deleted successfully' })
  } catch (error) {
    next(error)
  }
}

export default doctorNoteController