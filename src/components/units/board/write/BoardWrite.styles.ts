import styled from "@emotion/styled";
import { Modal } from "antd";
import type { ISubmitButtonProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.form`
  width: 1000px;
  height: 1500px;
  border: 1px solid black;
  margin: 0px 0px 100px 60px;
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
  }
  @media screen and (max-width: 767px) {
    width: 500px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 850px;
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
  width: 400px;
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
  width: 400px;
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

export const Subject = styled.input`
  width: 850px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
`;

export const Contents = styled.textarea`
  width: 850px;
  height: 300px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 45px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 45px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
  border-radius: 15px;
`;

export const Address = styled.input`
  width: 850px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
`;

export const Youtube = styled.input`
  width: 850px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
`;

export const ImageWrapper = styled.div`
  width: 850px;
  padding-top: 40px;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
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
  width: 800px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
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
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
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
