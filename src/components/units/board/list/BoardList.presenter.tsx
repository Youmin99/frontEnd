import { getDate } from "../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars from "../../search/Searchbar.container";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <Searchbars
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>title</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>writer</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>date</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle
            id={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="/images/board/list/write.png" />
          write post
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
