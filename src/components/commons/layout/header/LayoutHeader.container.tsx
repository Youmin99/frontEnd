import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRecoilState } from "recoil";
import { trueState } from "../../../../../pages/_app";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isTrue, setIsTrue] = useRecoilState(trueState);

  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = (): void => {
    setIsTrue((prev) => !prev);
    // void router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      show={isTrue}
    />
  );
}
