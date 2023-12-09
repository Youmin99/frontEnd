import styled from "@emotion/styled";
import { Modal } from "antd";
import type { ISubmitButtonProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.form`
  width: 750px;
  height: 1000px;
  border: 1px solid black;
  margin: 0px 0px 100px;
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin: 20px 0px 20px 0px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    height: 800px;
    margin: 20px 0px 20px 0px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 675px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  @media screen and (max-width: 1024px) {
    width: 550px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  @media screen and (max-width: 1024px) {
    width: 550px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;

export const Writer = styled.input`
  width: 325px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;

export const Password = styled.input`
  width: 325px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;

export const Label = styled.div`
  padding-bottom: 14px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div``;

export const AddressWrapper = styled.div`
  width: 675px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const DivWrapper = styled.div`
  width: 675px;
  height: 52px;

  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const Subject = styled.input`
  width: 675px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const Contents = styled.textarea`
  width: 675px;
  height: 300px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
    height: 200px;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 675px;

  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const State = styled.input`
  width: 10%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;

export const Address = styled.input`
  width: 20%;
  height: 52px;
  margin-left: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;

export const AddressCity = styled.input`
  width: 20%;
  height: 52px;
  margin-left: 16px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;

export const AddressDetail = styled.input`
  width: 50%;
  height: 52px;
  margin-left: 16px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;

export const Youtube = styled.input`
  width: 675px;
  height: 52px;
  margin-top: 20px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const ImageWrapper = styled.div`
  width: 675px;
  padding-top: 20px;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 15px;

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;

export const OptionWrapper = styled.div`
  width: 675px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 675px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 15px;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
