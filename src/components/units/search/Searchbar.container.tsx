import type { ChangeEvent } from "react";

import _ from "lodash";
import SearchPresenter from "./Searchbar.presenter";
import type { ISearchbars01Props } from "./Searchbar.types";

export default function Searchbars01(props: ISearchbars01Props): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return <SearchPresenter onChangeSearchbar={onChangeSearchbar} />;
}
