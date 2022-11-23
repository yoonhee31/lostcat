import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ILoginForm } from "../types";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const navigate = useNavigate();
  const [mes, setmes] = useState(null);

  const onFormSubmit = (data: ILoginForm) => {
    const { email, password } = data;

    axios
      .post("http://localhost:3333/user/login", { email, password })
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/signup");
        } else {
          setmes((x) => res.data.message);
        }
      })
      .catch((errors) => {
        setmes((x) => errors?.response?.data?.message);
      });
  };
  const onErrors = (data: any) => {
    // console.log(data);
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <Logo>FIND CAT ⭐️</Logo>
        <LoginForm onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {mes}
          <button>로그인</button>
        </LoginForm>
        <SignUpBtn to="/signup">이메일 회원가입</SignUpBtn>
        <FindPs to="/">아이디&#47;비밀번호 찾기 &#62;</FindPs>
        <KakaoLogin>카카오톡</KakaoLogin>
        <NaverLogin>네이버</NaverLogin>
        <GoogleLogin>구글</GoogleLogin>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #0d1f2b;
`;

const LoginWrapper = styled.div`
  /* position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  width: 18rem;
`;

const Logo = styled.div`
  margin: 2rem 0;
  color: white;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    border: none;
    border-bottom: 0.5px solid white;
    color: #f0e464;
    background-color: inherit;
  }
  button {
    margin: 0.6rem 0;
    padding: 0.6rem 0.7rem;
    background-color: #f0e464;
    color: #0d1f2b;
    border: none;
    border-radius: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const SignUpBtn = styled(Link)`
  /* margin: 0.1rem 0; */
  padding: 0.7rem;
  background-color: white;
  color: #0d1f2b;
  border: none;
  border-radius: 20px;
  font-size: 0.87rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

const FindPs = styled(Link)`
  margin-top: 1rem;
  color: #ffffffba;
  font-size: 0.3rem;
  text-align: center;
  text-decoration: underline;
`;

const KakaoLogin = styled.div`
  margin-top: 3rem;
  padding: 0.7rem;
  background-color: inherit;
  color: white;
  border: 0.5px solid white;
  border-radius: 20px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    border: 1px solid #fef01b;
    background-color: #fef01b;
    color: black;
  }
`;

const NaverLogin = styled.div`
  margin-top: 0.7rem;
  padding: 0.7rem;
  background-color: inherit;
  color: white;
  border: 0.5px solid white;
  border-radius: 20px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: #2db400;
    color: white;
    border: 1px solid #2db400;
  }
`;

const GoogleLogin = styled.div`
  margin-top: 0.7rem;
  padding: 0.7rem;
  background-color: inherit;
  color: white;
  border: 0.5px solid white;
  border-radius: 20px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    border: 1px solid #0073fa;
    background-color: #0073fa;
    color: white;
  }
`;
