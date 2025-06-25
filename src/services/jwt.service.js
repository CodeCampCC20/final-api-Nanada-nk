import jwt from 'jsonwebtoken'

const jwtService = {}

jwtService.createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15d",
    algorithm: "HS256"
  })
}
jwtService.createTokenDoctor = (payload) => {
  return jwt.sign(payload, process.env.DOCTOR_SECRET, {
    expiresIn: "15d",
    algorithm: "HS256"
  })
}


jwtService.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET,{
    algorithms: ["HS256"]
  })
}


jwtService.verifyTokenDoctor = (token) => {
  return jwt.verify(token, process.env.DOCTOR_SECRET,{
    algorithms: ["HS256"]
  })
}


export default jwtService