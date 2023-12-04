import { Searchbar, SearchbarInput } from "./Searchbars.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { ISearchbars01UIProps } from "./Searchbar.types";

export default function SearchPresenter(
  props: ISearchbars01UIProps
): JSX.Element {
  return (
    <Searchbar>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <SearchbarInput placeholder="search" onChange={props.onChangeSearchbar} />
    </Searchbar>
  );
}
