import { FireFilledIcon, Searchbar, SearchbarInput } from "./Searchbars.styles";
import type { ISearchbars01UIProps } from "./Searchbar.types";

export default function SearchPresenter(
  props: ISearchbars01UIProps
): JSX.Element {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput placeholder="search" onChange={props.onChangeSearchbar} />
    </Searchbar>
  );
}
