import prisma from "../config/prisma.js"

const healthRecordService = {}

healthRecordService.createHealthRecord = (data) => {
  return prisma.healthRecord.create({
    data: data,
    select: {
      id: true,
      userId: true,
      type: true,
      value: true,
      date: true,
    }
  })
}

healthRecordService.getAllHealthRecord = () => {
  return prisma.healthRecord.findMany({
    where: {
      isDeleted: false
    }
  })
}

healthRecordService.getAllHealthRecordByUserId = (userId) => {
  return prisma.healthRecord.findMany({
    where: {
      userId: Number(userId),
      isDeleted: false
    }
  })
}

healthRecordService.getHealthRecordById = async ({ healthId, userId }) => {
  return prisma.healthRecord.findFirst({
    where: {
      id: Number(healthId),
      userId: Number(userId),
      isDeleted: false
    }
  })
}

healthRecordService.updateHealthRecordById = async ({ healthId, type, value, userId }) => {
  const existingHealth = await prisma.healthRecord.findFirst({
    where: {
      id: Number(healthId),
      userId: Number(userId)
    }
  })

  if (!existingHealth) return null

  return prisma.healthRecord.update({
    where: {
      id: Number(healthId)
    },
    data: { type, value },
    select: {
      id: true,
      userId: true,
      type: true,
      value: true,
      date: true,
    }
  })
}

healthRecordService.deleteHealthRecordById = async ({ healthId, userId }) => {
  const existingHealth = await prisma.healthRecord.findFirst({
    where: {
      id: Number(healthId),
      userId: Number(userId),
      isDeleted: false
    }
  })

  if (!existingHealth) return null

  await prisma.healthRecord.update({
    where: {
      id: Number(healthId)
    },
    data: { isDeleted: true }
  })
    return true
}

export default healthRecordService
