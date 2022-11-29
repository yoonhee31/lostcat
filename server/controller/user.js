import {} from "express-async-errors";
import * as userRepository from "../data/user.js";

export async function signup(req, res) {
  const { email, password, name } = req.body;
  const isValidEmail = await userRepository.findByEmail(email);
  if (isValidEmail) {
    return res
      .status(409)
      .json({ status: 409, message: "이미 가입된 계정입니다 " });
  }
  const createuser = userRepository.createUser({
    email,
    password,
    name,
  });
  users = [createuser, ...users];
  res.status(201).json({ status: 201, message: `안녕하세요 ${name}님` });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const isValidEmail = userRepository.findByEmail(email);
  const isValidPassword = userRepository.findBypassword(password);
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
  if (req.session.id) {
    console.log("이미 로그인됨");
    res.status(204).json({ mes: "이미로그인" });
  } else {
    req.session.id = { email };
    res.status(200).json({ message: "로그인성공", status: 200 });
  }
}
