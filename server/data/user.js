import { db } from "../db/database.js";

let users = [
  {
    id: "1",
    username: "yoon",
    password: "1234",
    name: "yoon",
    email: "yoon@naver.com",
  },
  {
    id: "2",
    username: "hee",
    password: "1234",
    name: "hee",
    email: "hee@naver.com",
  },
  {
    id: "3",
    username: "heee",
    password: "1234",
    name: "hee",
    email: "heee@naver.com",
  },
];
export async function findByEmail(email) {
  return users.find((user) => user.email === email);
}
export async function findBypassword(password) {
  return users.find((user) => user.password === password);
}

export async function createUser(user) {
  const { email, password, name } = user;
  return { email, password, name };
}
