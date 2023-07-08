import { useRouter } from "next/router";
import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter(): JSX.Element {
  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = (): void => {
    void router.push("/login");
  };

  return (
    <LayoutFooterUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
