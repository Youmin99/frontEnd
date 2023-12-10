import HomeListUI from "./HomeList.presenter";
import { useState } from "react";
import { useQueryFetchBestBoards } from "../../../commons/hooks/queries/useQueryFetchBestBoards";

export default function HomeList(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQueryFetchBestBoards();

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <HomeListUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
