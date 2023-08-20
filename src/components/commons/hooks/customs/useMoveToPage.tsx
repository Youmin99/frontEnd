import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../store";
interface IMoveToPage {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IMoveToPage => {
  const router = useRouter();
  const [visitedPage, setVisitedpage] = useRecoilState(visitedPageState);
  const onClickMoveToPage = (path: string) => () => {
    setVisitedpage(path);
    void router.push(path);
  };

  return { visitedPage, onClickMoveToPage };
};
