import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black;

  background-color: rgba(76, 76, 76, 0.7);
  opacity: 1;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled(CloseOutlined)`
  margin: 33px;
`;

export const Modal = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  justify-content: center;
  top: 100px;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  border-radius: 20px;
`;

export const Title = styled.h1`
  height: 100px;
  padding: 20px 0px 0px 20px;
`;

export const submit = styled.button`
  height: 40px;
  width: 300px;
  background-color: #ff7f00;
  border-radius: 30px;
  border: none;

  &:hover {
    color: white;
  }
`;

export const buttonWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

export const createAccount = styled.span`
  height: 40px;
  width: 300px;
  background-color: #ff7f00;
  border-radius: 30px;
  border: none;
`;

export const linkStyle = styled(Link)``;

export const e = styled.span`
  border: none;
  &:hover {
    color: orange;
  }
  text-decoration: none;
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

export const InputWrapper = styled.div`
  width: 540px;
`;
export const EmailInputWrapper = styled.div``;

export const EmailInput = styled.input`
  padding: 20px;
  height: 40px;
  width: 300px;
  font-size: 16px;
  background-color: #dcdcdc;
  border: none;
  outline: none;
  border-radius: 30px;

  &:hover {
    color: orange;
  }
`;

export const PasswordInputWrapper = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
export const PasswordInput = styled.input`
  padding: 20px;
  height: 40px;
  width: 300px;
  margin-top: 25px;
  font-size: 16px;
  background-color: #dcdcdc;
  border: none;

  outline: none;
  border-radius: 30px;
  &:hover {
    color: orange;
  }
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

export const EtcButton = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const EtcItem = styled.div`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;
