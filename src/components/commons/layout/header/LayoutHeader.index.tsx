import Login from "../../../units/login/login.container";
import {
  DWrapper,
  InnerButton,
  InnerLogo,
  InnerWrapper,
  MenuItems,
  MeunWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useRecoilState } from "recoil";
import { accessTokenState, openState } from "../../store";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import useQueryFetchUserLoggedIn from "../../hooks/queries/useQueryFetchUserLogin";
import { useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
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
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage(`/boards`)}>posts</InnerLogo>

        {data ? (
          <MeunWrapper onClick={() => setDropdown((prev) => !prev)}>
            <InnerButton>
              {data.fetchUserLoggedIn.name} <CaretDownFilled />
            </InnerButton>
            {dropdown && (
              <DWrapper>
                {menuItems.map((submenu, index) => (
                  <div
                    key={index}
                    onClick={async () => {
                      submenu.title === "log out" ? await onClickLogOut() : "";
                    }}
                  >
                    <MenuItems onClick={onClickMoveToPage(`/${submenu.url}`)}>
                      {submenu.title}
                    </MenuItems>
                  </div>
                ))}
              </DWrapper>
            )}
          </MeunWrapper>
        ) : (
          <div>
            <InnerButton onClick={() => setIsOpen((prev) => !prev)}>
              log in
            </InnerButton>
            <InnerButton onClick={onClickMoveToPage(`/createaccount`)}>
              create account
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
      {isOpen && <Login />}
    </Wrapper>
  );
}
