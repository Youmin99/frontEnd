import { wrapAsync } from "../../commons/hooks/customs/wrapAsync";
import * as S from "./CreateAccount.styles";
import type { ICreateAccountUIProps } from "./CreateAccount.types";

export default function CreateAccountUI(
  props: ICreateAccountUIProps
): JSX.Element {
  return (
    <>
      <S.Wrapper onSubmit={wrapAsync(props.handleSubmit(props.onClickSubmit))}>
        <S.Title>{"Create An Account"}</S.Title>
        <p>Create an account to enjoy all the services free!</p>
        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="wtie name."
            {...props.register("user")}
          />
          <S.Error>{props.formState.errors.user?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="write password."
            {...props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="write email."
            {...props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            placeholder="write phone number."
            {...props.register("phone")}
          />
          <S.Error>{props.formState.errors.phone?.message}</S.Error>
        </S.InputWrapper>
        <S.SubmitButton isActive={props.isActive}>
          {"CreateAccount"}
        </S.SubmitButton>
        <p>Already Have An Account? Sign In</p>
      </S.Wrapper>
    </>
  );
}
