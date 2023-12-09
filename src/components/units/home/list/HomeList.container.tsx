import HomeListUI from "./HomeList.presenter";
import { useState } from "react";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";

export default function HomeList(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <HomeListUI
      data={data}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
