import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQueryFetchBoard({ boardId: router.query.boardId });

  return <BoardDetailUI data={data} />;
}
