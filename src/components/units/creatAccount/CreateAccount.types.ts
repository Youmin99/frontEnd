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
    phone: string;
  }>;

  formState: FormState<{
    user: string;
    password: string;
    email: string;
    phone: string;
  }>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onClickSubmit: (data: any) => void;
  isActive: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
