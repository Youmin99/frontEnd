import Login from "../../../units/login/login.container";
import * as S from "./LayoutHeader.styles";
import { useRecoilState } from "recoil";
import { accessTokenState, openState } from "../../store";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import useQueryFetchUserLoggedIn from "../../hooks/queries/useQueryFetchUserLogin";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMutationLoginOutUser } from "../../hooks/mutations/useMutationlogoutUser";
import { Modal } from "antd";

export const menuItems = [
  {
    title: "mypage",
    url: "account",
  },
  {
    title: "log out",
    url: "boards",
  },
];

export default function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useRecoilState(openState);

  const { data } = useQueryFetchUserLoggedIn();
  const [logoutUser] = useMutationLoginOutUser();
  const [dropdown, setDropdown] = useState(false);
  const [, setaccessToken] = useRecoilState(accessTokenState);

  const onClickLogOut = async (): Promise<void> => {
    try {
      setaccessToken("");
      await logoutUser();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={onClickMoveToPage(`/`)}>posts</S.InnerLogo>
        {data ? (
          <S.MeunWrapper onClick={() => setDropdown((prev) => !prev)}>
            <S.InnerButton>
              {data.fetchUserLoggedIn.name} <FontAwesomeIcon icon={faBars} />
            </S.InnerButton>
            {dropdown && (
              <S.DWrapper>
                {menuItems.map((submenu, index) => (
                  <div
                    key={index}
                    onClick={async () => {
                      submenu.title === "log out" ? await onClickLogOut() : "";
                    }}
                  >
                    <S.MenuItems onClick={onClickMoveToPage(`/${submenu.url}`)}>
                      {submenu.title}
                    </S.MenuItems>
                  </div>
                ))}
              </S.DWrapper>
            )}
          </S.MeunWrapper>
        ) : (
          <S.MenuBar>
            <S.Button onClick={onClickMoveToPage(`/boards`)}>
              Community
            </S.Button>
            {/* <S.Button onClick={onClickMoveToPage(`/createaccount`)}>
              Trade Product
            </S.Button> */}
            <S.LoginBtn onClick={() => setIsOpen((prev) => !prev)}>
              Login
            </S.LoginBtn>
            <S.RegisterBtn onClick={onClickMoveToPage(`/createaccount`)}>
              Sing up
            </S.RegisterBtn>
          </S.MenuBar>
        )}
      </S.InnerWrapper>
      {isOpen && <Login />}
    </S.Wrapper>
  );
}
