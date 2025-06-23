
import prisma from "../config/prisma.js"

const userService = {}

userService.getAllUser = () => {
  return prisma.user.findMany({})
}

userService.getUserById = (id) => {
  return prisma.user.findUnique({
    where: {
      id: Number(id)
    },
    select: {
      id: true,
      username: true
    }
  })
}


userService.updateUsername = async ({ id, username }) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      id: Number(id)
    }
  })

  if (!existingUser) return null

  return prisma.user.update({
    where: {
      id: Number(id)
    },
    data: { username },
    select: {
      id: true,
      username: true
    }
  })
}

export default userService