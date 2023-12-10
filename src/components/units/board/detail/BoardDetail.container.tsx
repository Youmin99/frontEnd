import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  useQueryFetchBoard,
} from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useMutationDeleteBoard } from "../../../commons/hooks/mutations/useMutationDeleteBoard";
import { Modal } from "antd";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useMutationLikeBoard } from "../../../commons/hooks/mutations/useMutationLikeBoard";
import { useMutationDisLikeBoard } from "../../../commons/hooks/mutations/useMutationDislikeBoard";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const [deleteBoard] = useMutationDeleteBoard();
  const { data } = useQueryFetchBoard({ boardId: router.query.boardId });
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDisLikeBoard();

  const onClickLike = async (): Promise<void> => {
    if (typeof router.query.boardId === "string") {
      await likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    }
  };
  const onClickDislike = async (): Promise<void> => {
    if (typeof router.query.boardId === "string") {
      await dislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    }
  };

  const onClickDelete = async (boardId: string): Promise<void> => {
    try {
      await deleteBoard({
        variables: {
          boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });

      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
