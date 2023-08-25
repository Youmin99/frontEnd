import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutFooter.styles";
import type { ILayoutHeaderProps } from "./LayoutFooter.types";

export default function LayoutFooterUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>post</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>login</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
