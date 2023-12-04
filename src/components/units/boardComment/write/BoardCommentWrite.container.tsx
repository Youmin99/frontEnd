import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import type { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";
import type { IBoardCommentWriteProps } from "./BoardCommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../../../commons/hooks/queries/useQueryFetchBoardComments";
import { useMutationCreateBoardComment } from "../../../commons/hooks/mutations/useMutationCreateBoardComment";
import { useMutationUpdateBoardComment } from "../../../commons/hooks/mutations/useMutationUpdateBoardComment";

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps
): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("error");
        return;
      }

      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setWriter("");
    setPassword("");
    setContents("");
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("did't edit contents");
      return;
    }
    if (password === "") {
      alert("did't write password");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {
        contents,
        rating: 0,
      };
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      if (typeof props.el?._id !== "string") {
        alert("error");
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
