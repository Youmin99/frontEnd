import styled from '@emotion/styled';
import Link from 'next/link';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: black;
	opacity: 0.5;
`;

export const Modal  = styled.div`
	position: absolute;
	background-color: white;

	justify-content: center;
	
	top: 100px;
	width: 400px;
	height: 500px;
	border: 1px solid black;
	border-radius: 20px;
	opacity: 1;
`;

export const Title  = styled.h1`
    height: 100px;
    padding: 20px 0px 0px 20px;
`;

export const submit  = styled.button`
    height: 40px;
	width: 300px;
	background-color: #ff7f00;
	border-radius: 30px;
	border:none;
`;

export const buttonWrapper = styled.div`
  padding:10px;
  display:flex;
`;

export const createAccount  = styled.span`
    height: 40px;
	width: 300px;
	background-color: #ff7f00;
	border-radius: 30px;
	border:none;
`;

export const linkStyle = styled(Link)`
  font-size: 50px;
  color: black;
  cursor: pointer;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;
export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
  padding-bottom: 160px;
`;

export const LogoTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  padding-top: 30px;
`;
export const InputWrapper = styled.div`
  width: 540px;
`;
export const EmailInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;
export const EmailInput = styled.input`
height: 40px;
width: 300px;
  font-size: 16px;
  background-color: #bebebe;
  border: none;
  background: none;
  outline: none;
  border-radius: 30px;
`;
export const PasswordInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;
export const PasswordInput = styled.input`
  height: 40px;
  width: 300px;
  margin-top: 40px;
  font-size: 16px;
  background: #bebebe;
  background-color:red;
  border: none;
  background: none;
  outline: none;
  border-radius: 30px;
`;
export const EmailError = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: #ff1b6d;
`;
export const PasswordError = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: #ff1b6d;
`;
export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  border-radius: 38px;
  padding: 25px 0;
  background-color: rgba(255, 27, 109, 0.6);
  margin: 20px 0 45px 0;
  cursor: pointer;
`;

export const EtcButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const EtcItem = styled.div`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;



