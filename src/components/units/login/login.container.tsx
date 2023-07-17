import { useState } from "react";
import type { ChangeEvent } from "react";
import * as S from "./login.styles";
import { useRecoilState } from "recoil";
import { trueState } from "../../../../pages/_app";

export default function Login(): JSX.Element {
  const [isTrue, setIsTrue] = useRecoilState(trueState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.");
    }
  };

  const onClickLogin = (): void => {
    if (emailError === "" && passwordError === "") {
      alert("환영합니다");
    }
  };

  const handleModal = (): void => {
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        {isTrue && (
          <S.ModalWrapper>
            <S.Modal>
              <S.TitleWrapper>
                <S.Title>login</S.Title>
                <S.Close onClick={handleModal}></S.Close>
              </S.TitleWrapper>
              <S.Wapper>
                <S.EmailInputWrapper>
                  <S.EmailInput
                    type="email"
                    placeholder="email"
                    onChange={onChangeEmail}
                  ></S.EmailInput>
                  <S.EmailError>{emailError}</S.EmailError>
                </S.EmailInputWrapper>
                <S.PasswordInputWrapper>
                  <S.PasswordInput
                    type="password"
                    placeholder="password"
                    onChange={onChangePassword}
                  ></S.PasswordInput>
                  <S.PasswordError>{passwordError}</S.PasswordError>
                </S.PasswordInputWrapper>
                <S.buttonWrapper>
                  <S.submit onChange={onClickLogin}>log in</S.submit>
                </S.buttonWrapper>
              </S.Wapper>
              <S.EtcButton>
                <S.linkStyle href="/d">
                  <S.e>find email</S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/about">
                  <S.e>find password </S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/time">
                  <S.e>create acount</S.e>
                </S.linkStyle>
              </S.EtcButton>
            </S.Modal>
          </S.ModalWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
