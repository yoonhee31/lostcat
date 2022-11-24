import express from "express";
import "express-async-errors";

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
    password: "12345",
    name: "hee",
    email: "hee@naver.com",
  },
];

const router = express.Router();

router.post("signup", (req, res, next) => {
  const { email, password, name } = req.body;
  const isValidEmail = users.find((user) => user.email === email);
  if (isValidEmail) {
    return res
      .status(409)
      .json({ status: 409, message: "이미 가입된 계정입니다 " });
  }
  const createuser = {
    id: Date.now().toString(),
    createAt: new Date(),
    email,
    password,
    name,
  };
  users = [createuser, ...users];
  res.status(201).json({ status: 201, message: `안녕하세요 ${name}님` });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  const isValidEmail = users.find((user) => user.email === email);
  const isValidPassword = users.find((user) => user.password === password);
  console.log(email, password);
  if (!isValidEmail) {
    return res
      .status(401)
      .json({ message: "이메일 또는 비밀번호가 맞지 않습니다." });
  }
  if (!isValidPassword) {
    return res
      .status(401)
      .json({ message: "이메일 또는 비밀번호가 맞지 않습니다." });
  }
  res.status(200).json({ message: "로그인성공", status: 200 });
});

export default router;
