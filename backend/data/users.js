import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rodrigo Garcia",
    email: "rodris@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Miguel De La Torre",
    email: "miguel@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
