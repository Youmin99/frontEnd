import Login from "../../../units/login/login.container";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useRecoilState } from "recoil";
import { openState } from "../../store";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
export default function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useRecoilState(openState);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage(`/boards`)}>posts</InnerLogo>
        <div>
          <InnerButton onClick={() => setIsOpen((prev) => !prev)}>
            log in
          </InnerButton>
          <InnerButton onClick={onClickMoveToPage(`/account`)}>
            create account
          </InnerButton>
        </div>
      </InnerWrapper>
      {isOpen && <Login />}
    </Wrapper>
  );
}
