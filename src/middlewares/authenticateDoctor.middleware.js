import authService from "../services/auth.service.js"
import jwtService from "../services/jwt.service.js"
import createError from "../utils/create-error.js"

const authenticateDoctor = async (req,res,next) => {
  try {

    const authHeader = req.headers.authorization
    console.log('authHeader', authHeader)

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError(401,"Authentication required")
    }

    const token = authHeader.split(" ")[1]
    console.log('token', token)

    if(!token) {
      createError(401,"Authentication required")
    }

    const payload = jwtService.verifyToken(token)
    console.log('payload', payload)

    if(!payload.id) {
      createError(403, "You do not have permission to perform this action")
    }

    const user = await authService.findDoctorById(payload.id)
    console.log('user', user)

    if(!user) {
      createError(403, "You do not have permission to perform this action")
    }

    req.user = user

    next()

  } catch (error) {
    next(error)
  }
}

export default authenticateDoctor