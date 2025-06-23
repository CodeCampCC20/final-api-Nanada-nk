import prisma from "../config/prisma.js"

const doctorService = {}

doctorService.getAllDoctor = () => {
  return prisma.doctor.findMany({})
}

doctorService.getDoctorById = (id) => {
  return prisma.doctor.findUnique({
    where: {
      id: Number(id)
    },
    select: {
      id: true,
      username: true,
      specialization: true
    }
  })
}

doctorService.updateUsernameSpecialization = async ({id, username,specialization}) => {
  const existingUser = await prisma.doctor.findFirst({
    where: {
      id: Number(id)
    }
  })

  if(!existingUser) return null

  return prisma.doctor.update({
    where: {
      id: Number(id)
    },
    data: {username,specialization},
    select: {
      id: true,
      username: true,
      specialization:true
    }
  })
}

export default doctorService