import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import * as S from "./BoardCommentList.styles";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { useMutationDeleteBoardComment } from "../../../commons/hooks/mutations/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../../commons/hooks/queries/useQueryFetchBoardComments";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={onClickDelete}>
          <div>password: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star value={props.el.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
