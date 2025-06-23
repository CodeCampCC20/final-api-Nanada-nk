import bcrypt from "bcryptjs";

const hashService = {}

hashService.hashPassword = (password) => {
  return bcrypt.hashSync(password,10)
}

hashService.comparePassword = (password,hashPassword) => {
  return bcrypt.compareSync(password,hashPassword)
}

export default hashService