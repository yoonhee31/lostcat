import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyparser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import { default as sessionn } from "session-file-store";
import userRouter from "./router/user.js";

const app = express();
const port = 3333;
const fileStore = sessionn(session);

app.use(cookieParser());
app.use(
  session({
    httpOnly: true,
    secure: true,
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
    },
    store: new fileStore(),
  })
);
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json({ mes: "404 Error!" });
});

//express-async-errors => 프로미스도 에러에 걸림! or expressv5 를 사용.
//에러처리 최후의 안정망
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500).json({ message: "500 Error!" });
});

app.listen(port, () => {
  console.log("server start");
});
