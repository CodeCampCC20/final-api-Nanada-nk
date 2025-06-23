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

doctorNoteService.getAllDoctorNote = (doctorId) => {
  return prisma.doctorNote.findMany({
    where: {
      doctorId: Number(doctorId),
      isDeleted: false
    }
  })
}

doctorNoteService.getDoctorNoteById = async ({ doctorId, userId }) => {
  return prisma.doctorNote.findMany({
    where: {
      userId: Number(userId),
      doctorId: Number(doctorId),
      isDeleted: false
    },
    orderBy: {
      createAt: 'desc'
    }
  })
}

doctorNoteService.getDoctorNoteReceived = async ({ userId }) => {
  return prisma.doctorNote.findMany({
    where: {
      userId: Number(userId),
      isDeleted: false
    }
  })
}

doctorNoteService.updateDoctorNoteById = async ({ noteId, note, doctorId }) => {
  const existingNote = await prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
      doctorId: Number(doctorId),
      isDeleted: false
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

doctorNoteService.deleteDoctorNoteById = async ({ noteId, doctorId }) => {
  const existingNote = await prisma.doctorNote.findFirst({
    where: {
      id: Number(noteId),
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