import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import LoginPresenter from "./login.presenter";
import { accessTokenState, openState } from "../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationLoginUser } from "../../commons/hooks/mutations/useMutationLoginUser";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const [, setaccessToken] = useRecoilState(accessTokenState);
  const [, setIsOpen] = useRecoilState(openState);

  const [loginUser] = useMutationLoginUser();

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
    console.log(password);
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
        setIsOpen(false);
        void router.push("/boards");
        localStorage.setItem("accessToken", accesstoken);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
