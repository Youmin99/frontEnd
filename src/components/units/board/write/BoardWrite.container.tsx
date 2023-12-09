import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import type { IBoardWriteProps } from "./BoardWrite.types";
import { useMutationCreateBoard } from "../../../commons/hooks/mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../../../commons/hooks/mutations/useMutationUpdateBoard";
import { useForm } from "react-hook-form";
import { createwrite } from "../../../commons/error/BoardWrite.yup";
import { FETCH_BOARD } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useQueryFetchBoards";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createwrite),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.boardAddress.zipcode,
              address: data.boardAddress.address,
              city: data.boardAddress.city,
              state: data.boardAddress.state,
            },
            images: [...fileUrls],
          },
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });

      console.log(result.data?.createBoard._id);
      if (result.data?.createBoard._id === undefined) {
        alert("error");
        return;
      }

      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onClickUpdate = async (data: any): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("error");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data.password,
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.boardAddress.zipcode,
              address: data.boardAddress.address,
              city: data.boardAddress.city,
              state: data.boardAddress.state,
            },
            images: [...fileUrls],
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      if (result.data?.updateBoard._id === undefined) {
        alert("error with request.");
        return;
      }
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
