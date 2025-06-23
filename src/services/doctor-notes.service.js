import prisma from "../config/prisma.js"

const doctorNoteService = {}

doctorNoteService.createDoctorNote = (data) => {
  return prisma.doctorNote.create({
    data: data,
    select: {
      id: true,
      doctorId: true,
      userId: true,
      note: true,
      createAt: true
    }
  })
}

doctorNoteService.getAllDoctorNote = () => {
  return prisma.doctorNote.findMany({
    where: {
      isDeleted: false
    }
  })
}

doctorNoteService.getDoctorNoteById = async ({ noteId, doctorId }) => {
  return prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
      userId: Number(doctorId),
      isDeleted: false
    }
  })
}

doctorNoteService.getDoctorNoteReceived = async ({ noteId, userId }) => {
  return prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
      userId: Number(userId),
      isDeleted: false
    }
  })
}

doctorNoteService.updateDoctorNoteById = async ({ noteId, note, userId, doctorId }) => {
  const existingNote = await prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
      userId: Number(userId),
      doctorId: Number(doctorId),
    }
  })

  if (!existingNote) return null

  return prisma.doctorNote.update({
    where: {
      id: Number(noteId)
    },
    data: { note },
    select: {
      id: true,
      doctorId: true,
      userId: true,
      note: true,
      createAt: true
    }
  })
}

doctorNoteService.deleteDoctorNoteById = async ({ noteId, userId , doctorId}) => {
  const existingNote = await prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
      userId: Number(userId),
      doctorId: Number(doctorId),
      isDeleted: false
    }
  })

  if (!existingNote) return null

  await prisma.doctorNote.update({
    where: {
      id: Number(noteId)
    },
    data: { isDeleted: true }
  })
    return true
}

export default doctorNoteService