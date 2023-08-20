import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useQueryFetchBoardComment } from "../../../commons/hooks/queries/useQueryFetchBoardComments";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data, fetchMore } = useQueryFetchBoardComment({
    boardId: router.query.boardId,
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardComments === undefined)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
