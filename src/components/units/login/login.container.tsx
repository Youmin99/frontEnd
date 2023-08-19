import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import LoginPresenter from "./login.presenter";
import { accessTokenState, trueState } from "../../commons/store";
import { useMutation, gql } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function Login(prop: { page: boolean }): JSX.Element {
  const [isTrue, setIsTrue] = useRecoilState(trueState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const [, setaccessToken] = useRecoilState(accessTokenState);

  const LOGIN_USER = gql`
    mutation loginUser($email: String) {
      loginUser(email: $email, password: $password) {
        accessToken
      }
    }
  `;

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    if (!email.includes("@")) {
      setEmailError("check the email");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("wrong password");
    } else {
      setPasswordError("");
    }
  };

  const onClickLogin = async (): Promise<void> => {
    if (emailError === "" && passwordError === "") {
      alert("wellcome");
    }

    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accesstoken = result.data?.loginUser.accessToken;

      if (typeof accesstoken === "string") {
        setaccessToken(accesstoken);
        void router.push("/loginsuccess");
        localStorage.setItem("accessToken", accesstoken);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const handleModal = (): void => {
    setIsTrue((prev) => !prev);
  };

  return (
    <LoginPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      handleModal={handleModal}
      emailError={emailError}
      passwordError={passwordError}
      isTrue={isTrue ?? prop.page}
    />
  );
}
