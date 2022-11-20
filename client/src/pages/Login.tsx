import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <Logo>FIND CAT ⭐️</Logo>
        <LoginForm>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>로그인</button>
        </LoginForm>
        <SignUpBtn>이메일 회원가입</SignUpBtn>
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
    margin: 1rem 0;
    padding: 0.7rem;
    background-color: #f0e464;
    color: #0d1f2b;
    border: none;
    border-radius: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const SignUpBtn = styled.button`
  /* margin: 0.1rem 0; */
  padding: 0.7rem;
  background-color: white;
  color: #0d1f2b;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const FindPs = styled(Link)`
  margin-top: 1rem;
  color: #ffffffba;
  font-size: 0.7rem;
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
    color: black;
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
