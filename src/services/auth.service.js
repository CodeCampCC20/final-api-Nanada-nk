import prisma from "../config/prisma.js";

const authService = {}

authService.findUserByUsername = (username) => {
  return prisma.user.findUnique({
    where : {
      username
    },
    select:{
      id: true,
      username: true,
      password: true
    }
  })
}

authService.findDoctorByUsername = (username) => {
  return prisma.doctor.findUnique({
    where : {
      username
    },
    select:{
      id: true,
      username: true,
      password: true,
      specialization:true
    }
  })
}

authService.createUser = (data) => {
  return prisma.user.create({
    data,select: {
      id: true,
      username: true
    }
  })
}

authService.createDoctor = (data) => {
  return prisma.doctor.create({
    data,select: {
      id: true,
      username: true,
      specialization: true,
    }
  })
}

authService.findUserById = (id) => {
  return prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      username: true,
    }
  })
}

authService.findDoctorById = (id) => {
  return prisma.doctor.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      username: true,
      specialization: true
    }
  })
}

export default authService