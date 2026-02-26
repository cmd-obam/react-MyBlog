import React from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useAlertStore from "../store/useAlertStore";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  padding: 50px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 40px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0 10px 0;
`;

const LoginName = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const LoginInput = styled.input`
  width: 260px;
  height: 45px;
  border: none;

  border-radius: 10px;
  padding: 10px;

  background: rgba(217, 217, 217, 1);
`;

const LoginBtn = styled.button`
  width: 260px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.surface};
  background: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginFooter = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Fbutotn = styled.button`
  border: none;
  width: 78px;
  height: 27px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  margin-top: 5px;
`;

export default function LoginPage() {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
  const showAlert = useAlertStore((s) => s.showAlert);

  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      showAlert("이메일과 비밀번호를 모두 입력하세요");
      return;
    }

    const isSuccess = login(email.value, password.value);

    if (isSuccess) {
      showAlert(`환영합니다. ♥님`);
      navigate("/");
    } else {
      showAlert("이메일 또는 비밀번호가 일치하지 않습니다");
      password.reset();
    }
  };

  return (
    <LoginBox>
      <Login>
        <LoginName>로그인</LoginName>
        <LoginForm onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor="email">이메일</label>
            <LoginInput
              id="email"
              type="text"
              placeholder="example@gmail.com"
              {...email}
              autoComplete="username"
            />
          </InputBox>

          <InputBox>
            <label htmlFor="password">비밀번호</label>
            <LoginInput
              id="password"
              type="password"
              placeholder="*******"
              {...password}
              autoComplete="current-password"
            />
          </InputBox>

          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginForm>
      </Login>
      <LoginFooter>
        <Fbutotn>아이디 찾기</Fbutotn>
        <Fbutotn>비밀번호 찾기</Fbutotn>
        <Fbutotn>회원가입</Fbutotn>
      </LoginFooter>
    </LoginBox>
  );
}
