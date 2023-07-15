import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useState } from "react";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);

  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = (): void => {
    setShow((prev) => !prev);
    // void router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      show={show}
    />
  );
}
