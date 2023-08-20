import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardList(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
