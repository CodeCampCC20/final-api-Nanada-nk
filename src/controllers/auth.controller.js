import authService from "../services/auth.service.js"
import hashService from "../services/hash.service.js"
import jwtService from "../services/jwt.service.js"
import createError from "../utils/create-error.js"

const authController = {}

authController.registerUser = async (req, res, next) => {
  try {

    const { username, password } = req.body
    console.log('req.body Register', req.body)

    const existUser = await authService.findUserByUsername(username)
    console.log('existUser Register', existUser)

    if (existUser) {
      throw createError(400, "Already exist username")
    }

    const hashPassword = hashService.hashPassword(password)
    console.log('hashPassword', hashPassword)

    const newUser = await authService.createUser({ username, password: hashPassword })
    console.log('newUser', newUser)

    res.status(201).json({ success: true, newUser: { id: newUser.id, username: newUser.username }, message: "Register user Successfully" })

  } catch (error) {
    next(error)
  }
}

authController.registerDoctor = async (req, res, next) => {
  try {

    const { username, password, specialization } = req.body
    console.log('req.body Register Doctor', req.body)

    const existDoctor = await authService.findDoctorByUsername(username)
    console.log('existDoctor Register Doctor', existDoctor)

    if (existDoctor) {
      throw createError(400, "Already exist username")
    }

    const hashPassword = hashService.hashPassword(password)
    console.log('hashPassword', hashPassword)

    const newDoctor = await authService.createDoctor({ username, specialization, password: hashPassword })
    console.log('newDoctor', newDoctor)

    res.status(201).json({ success: true, newDoctor: { id: newDoctor.id, username: newDoctor.username, specialization: newDoctor.specialization }, message: "Register doctor Successfully" })

  } catch (error) {
    next(error)
  }
}

authController.login = async (req, res, next) => {
  try {

    const { username, password } = req.body
    console.log('req.body Login', req.body)

    const existUser = await authService.findUserByUsername(username)
    console.log('existUser Login', existUser)

    if (!existUser) {
      throw createError(400, "Username or Password invalid")
    }

    const isMatchPassword = hashService.comparePassword(password, existUser.password)
    console.log('isMatchPassword', isMatchPassword)

    if (!isMatchPassword) {
      throw createError(400, "Username or Password invalid")
    }


    const payload = { id: existUser.id }
    console.log('payload', payload)

    const accessToken = jwtService.createToken(payload)
    console.log('accessToken', accessToken)

    res.status(200).json({ success: true, accessToken })

  } catch (error) {
    next(error)
  }
}


authController.loginDoctor = async (req, res, next) => {
  try {

    const { username, password } = req.body
    console.log('req.body Login', req.body)

    const existUser = await authService.findDoctorByUsername(username)
    console.log('existUser Login', existUser)

    if (!existUser) {
      throw createError(400, "Username or Password invalid")
    }

    const isMatchPassword = hashService.comparePassword(password, existUser.password)
    console.log('isMatchPassword', isMatchPassword)

    if (!isMatchPassword) {
      throw createError(400, "Username or Password invalid")
    }


    const payload = { id: existUser.id }
    console.log('payload', payload)

    const accessToken = jwtService.createToken(payload)
    console.log('accessToken', accessToken)

    res.status(200).json({ success: true, accessToken })

  } catch (error) {
    next(error)
  }
}
export default authController