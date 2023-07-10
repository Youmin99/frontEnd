import { ChangeEvent, useState } from 'react';
import * as S from'./login.styles';
import {Button, Modal ,Rate} from 'antd';
import Link from 'next/link';

export default function Login() {
	const [isTrue, setIsTrue] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>):void => {
    setEmail(event.target.value);
    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>):void => {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.");
    }
  };
  const onClickLogin = () => {
    if (emailError === "" && passwordError === "") {
      alert("환영합니다");
    } 
  };


	const handleModal = () => {
		setIsTrue((prev) => !prev);
	};

	return (
		<>
			<S.Wrapper>
			    
			{!isTrue && (<button onClick={handleModal}>나와라 모달</button>)}
				{isTrue && (
					<S.ModalWrapper>
						<S.Modal>
						  <S.Title>login</S.Title>
						
						  <S.Wapper>
						  <S.EmailInputWrapper>
						    <S.EmailInput 
							  type="email"
							  placeholder="email"
                              onChange={onChangeEmail}>
							</S.EmailInput>
							<S.EmailError>{emailError}</S.EmailError>
						  </S.EmailInputWrapper>
						  <S.PasswordInputWrapper>
						    <S.PasswordInput 
							  type="password"
							  placeholder="password"
                              onChange={onChangePassword}>
							</S.PasswordInput>
							<S.PasswordError>{passwordError}</S.PasswordError>
						  </S.PasswordInputWrapper>
						  <S.buttonWrapper>
						    <S.submit onChange={onClickLogin}>log in</S.submit>
						  </S.buttonWrapper>
						  </S.Wapper>
						  <S.EtcButton>
						    <S.linkStyle href="/about">find email</S.linkStyle>
						    <S.EtcItem>|</S.EtcItem>
						    <S.linkStyle href="/about">find password</S.linkStyle>
							<S.EtcItem>|</S.EtcItem>
						    <S.linkStyle href="/about">create acount</S.linkStyle>
						  </S.EtcButton>
						 

						</S.Modal>
					</S.ModalWrapper>
				)}
			</S.Wrapper>
		</>
	);
}
