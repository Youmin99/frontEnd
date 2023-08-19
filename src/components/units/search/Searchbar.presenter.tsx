import { FireFilledIcon, Searchbar, SearchbarInput } from "./Searchbars.styles";
import type { ISearchbars01UIProps } from "./Searchbar.types";

export default function SearchPresenter(
  props: ISearchbars01UIProps
): JSX.Element {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
