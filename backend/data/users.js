import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "jhon@example.com",
    password: bcrypt.hashSync("5123899", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("5123899", 10),
  },
];

export default users;
