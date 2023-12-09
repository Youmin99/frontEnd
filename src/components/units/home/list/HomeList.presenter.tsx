import { getDate } from "../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./HomeList.styles";
import type { IHomeListUIProps } from "./HomeList.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCrown } from "@fortawesome/free-solid-svg-icons";

export default function HomeListUI(props: IHomeListUIProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Header>
        <h3>
          <FontAwesomeIcon icon={faCrown} />
          &nbsp; Best Posts
        </h3>
        <div
          style={{ cursor: "pointer" }}
          onClick={onClickMoveToPage(`/boards`)}
        >
          More&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </S.Header>
      <S.TableTop />

      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{String(index + 1)}</S.ColumnBasic>
          <S.ColumnTitle
            id={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.Columntime>{getDate(el.createdAt)}</S.Columntime>
        </S.Row>
      ))}
      <S.TableBottom />
    </S.Wrapper>
  );
}
