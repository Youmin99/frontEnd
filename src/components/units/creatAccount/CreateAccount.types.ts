import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface ICreateAccountUIProps {
  register: UseFormRegister<{
    user: string;
    password: string;
    email: string;
    phone: number;
  }>;

  formState: FormState<{
    user: string;
    password: string;
    email: string;
    phone: number;
  }>;

  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onClickSubmit: (data: any) => void;
  isActive: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
