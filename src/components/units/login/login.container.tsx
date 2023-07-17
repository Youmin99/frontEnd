import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { trueState } from "../../../../pages/_app";
import LoginPresenter from "./login.presenter";

export default function Login(): JSX.Element {
  const [isTrue, setIsTrue] = useRecoilState(trueState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const onClickLogin = (): void => {
    if (emailError === "" && passwordError === "") {
      alert("wellcome");
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
      isTrue={isTrue}
    />
  );
}
