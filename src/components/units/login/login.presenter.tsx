import * as S from "./login.styles";
import type { IloginProps } from "./login.types";

export default function LoginPresenter(props: IloginProps): JSX.Element {
  if (typeof props.isTrue !== "boolean") return <></>;
  return (
    <>
      <S.Wrapper>
        {props.isTrue && (
          <S.ModalWrapper>
            <S.Modal>
              <S.TitleWrapper>
                <S.Title>login</S.Title>
                <S.Close onClick={props.handleModal}></S.Close>
              </S.TitleWrapper>
              <S.Wapper>
                <S.EmailInputWrapper>
                  <S.EmailInput
                    type="email"
                    placeholder="email"
                    onChange={props.onChangeEmail}
                  ></S.EmailInput>
                  <S.EmailError>{props.emailError}</S.EmailError>
                </S.EmailInputWrapper>
                <S.PasswordInputWrapper>
                  <S.PasswordInput
                    type="password"
                    placeholder="password"
                    onChange={props.onChangePassword}
                  ></S.PasswordInput>
                  <S.PasswordError>{props.passwordError}</S.PasswordError>
                </S.PasswordInputWrapper>
                <S.buttonWrapper>
                  <S.submit onChange={props.onClickLogin}>log in</S.submit>
                </S.buttonWrapper>
              </S.Wapper>
              <S.EtcButton>
                <S.linkStyle href="/d">
                  <S.e>find email</S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/about">
                  <S.e>find password </S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/time">
                  <S.e>create acount</S.e>
                </S.linkStyle>
              </S.EtcButton>
            </S.Modal>
          </S.ModalWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
