import { ChangeEvent, useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { FETCH_BOARD_COMMENTS, UPDATE_BOARD } from './BoardCommentWrite.queries'
import { IMutation, IMutationCreateBoardCommentArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { IBoardWriteProps } from "./BoardCommentWrite.types";

export default function BoardWrite(props: IBoardWriteProps){
  const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

 

  const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(FETCH_BOARD_COMMENTS);

 

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      
    }

  };


  const onClickWrite = async () => {
    try {
      if(typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }

      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [   //// 다시 보기
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if(error instanceof Error) alert(error.message);
    }
  };
  



  return (
    <BoardCommentWriteUI

        onChangeWriter={onChangeWriter}
      //  onChangePassword={onChangePassword}


        onClickWrite={onClickWrite}
        //onClickUpdate={onClickUpdate}
        
       // isActive={isActive}
        //isEdit={props.isEdit}
       // data={props.data}
    />)
  };
