import userService from "../services/users.service.js"

const userController = {}

userController.getMe = async (req, res, next) => {
  try {
    const id = Number(req.user.id)

    const user = await userService.getUserById(id)
    console.log('user', user)

    if (!user) return res.status(404).json({ success: false, message: "Resource not found" })

    res.status(200).json({ success: true, user })

  } catch (error) {
    next(error)
  }
}

userController.updateUsername = async (req, res, next) => {
  try {
    const id = Number(req.user.id)
    const { username } = req.body

    const updateUser = await userService.updateUsername({ id, username })
    if (!updateUser) {
      return res.status(404).json({ success: false, message: "Resource not found" })
    }
    res.status(200).json({ success: true, updateUser })
  } catch (error) {
    next(error)
  }
}

export default userController