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
import useQueryFetchUserLoggedIn from "../../hooks/queries/useQueryFetchUserLogin";
export default function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useRecoilState(openState);
  const { data } = useQueryFetchUserLoggedIn();
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage(`/boards`)}>posts</InnerLogo>

        {data ? (
          <div>
            <InnerButton onClick={onClickMoveToPage(`/myaccount`)}>
              {data.fetchUserLoggedIn.name}
            </InnerButton>
          </div>
        ) : (
          <div>
            <InnerButton onClick={() => setIsOpen((prev) => !prev)}>
              log in
            </InnerButton>
            <InnerButton onClick={onClickMoveToPage(`/account`)}>
              create account
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
      {isOpen && <Login />}
    </Wrapper>
  );
}
