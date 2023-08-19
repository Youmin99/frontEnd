import Login from "../../../units/login/login.container";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>posts</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>log in</InnerButton>
          <InnerButton>create account</InnerButton>
        </div>
      </InnerWrapper>
      {props.show && <Login />}
    </Wrapper>
  );
}
