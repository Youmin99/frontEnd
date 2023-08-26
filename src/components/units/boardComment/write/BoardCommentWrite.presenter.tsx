import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>comment</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="user"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="password"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <S.Star onChange={props.setStar} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="write comment"
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {props.contents !== ""
              ? props.contents.length
              : props.el?.contents.length ?? 0}
            /100
          </S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit === true ? props.onClickUpdate : props.onClickWrite
            }
          >
            register
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
