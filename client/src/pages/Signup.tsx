import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ISignupForm } from "../types";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ISignupForm>({ mode: "onChange" });

  // useEffect(() => {
  //   const email = watch().email;
  //   const isEmailValid = errors.email?.message;
  //   if (!isEmailValid) {
  //     console.log("사용 할 수 있는 이메일입니다.");
  //   } else {
  //     console.log("사용 할 수 없는 이메일입니다.");
  //   }
  // }, [watch().email]);

  const checkPassword = () => {
    if (watch().password !== watch().password2) {
      return "비밀번호가 일치하지 않습니다.";
    }
  };

  const createAccount = (data: ISignupForm) => {
    const { email, password, name } = data;
    axios
      .post("http://localhost:3333/user/signup", { email, password, name })
      .then((res) => {
        if (res.data.status === 201) {
          return console.log("create!");
        }
      });
  };

  return (
    <SignupWrapper>
      <SignupForm onSubmit={handleSubmit(createAccount)}>
        <Title>회원가입 ⭐️</Title>
        <Email>
          <div>&nbsp;&nbsp;아이디(이메일)</div>
          <div>
            <input
              {...register("email", {
                required: "email을 입력해주세요.",
                pattern: {
                  value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "이메일 형식에 맞게 입력해주세요.",
                },
              })}
              placeholder="이메일 주소"
            />
            {/* <button onClick={checkEmailOverlap}>중복확인</button> */}
          </div>
        </Email>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Password>
          <div>&nbsp;&nbsp;비밀번호</div>
          <input
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요." },
              // minLength: { value: 2, message: "두글자 이상 입력해주세요." },
              validate: checkPassword,
            })}
            type="password"
            placeholder="비밀번호"
          />
        </Password>
        <Password2>
          <div>&nbsp;&nbsp;비밀번호확인</div>
          <input
            {...register("password2", {
              required: { value: true, message: "" },
              validate: checkPassword,
            })}
            type="password"
            placeholder="비밀번호 확인"
          />
        </Password2>
        <ErrorMessage>{errors?.password2?.message}</ErrorMessage>
        <Name>
          <div>&nbsp;&nbsp;이름(별명)</div>
          <input
            {...register("name", {
              required: { value: true, message: "이름을 입력해주세요." },
              minLength: { value: 2, message: "두글자 이상 입력해주세요." },
            })}
            placeholder="이름 또는 별명"
          />
        </Name>
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>

        <SignupBtn>FIND CAT 시작하기</SignupBtn>
      </SignupForm>
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.navy};
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  width: 18rem;
`;

const Title = styled.div`
  padding: 2rem 0;
  font-weight: 500;
  text-align: center;
  color: white;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  div {
    margin-bottom: 0.5rem;
    color: white;
    font-size: 0.8rem;
  }
  input {
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    color: ${(props) => props.theme.yellow};
    background-color: inherit;

    ::placeholder {
      font-size: 0.75rem;
    }
  }
  /* button {
    width: 80px;
    margin: 0.3rem 0;
    padding: 0.3rem 0.7rem;
    background-color: ${(props) => props.theme.yellow};
    color: #0d1f2b;
    border: none;
    border-radius: 20px;
    font-size: 0.7rem;
    cursor: pointer;
  } */
`;

const Password = styled(Email)``;

const Password2 = styled(Email)``;

const Name = styled(Email)``;

const SignupBtn = styled.button`
  margin: 0.6rem 0;
  padding: 0.6rem 0.7rem;
  background-color: ${(props) => props.theme.yellow};
  color: #0d1f2b;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  padding-bottom: 1rem;
  color: #ff4646;
  font-size: 0.7rem;
`;
