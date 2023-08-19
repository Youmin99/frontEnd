import type { ChangeEvent } from "react";

export interface IloginProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  handleModal: () => void;
  emailError: string;
  passwordError: string;
  isTrue?: boolean | undefined;
}
