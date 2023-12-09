import { wrapAsync } from "../../../commons/hooks/customs/wrapAsync";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper
        onSubmit={
          props.isEdit
            ? wrapAsync(props.handleSubmit(props.onClickUpdate))
            : wrapAsync(props.handleSubmit(props.onClickSubmit))
        }
      >
        <S.Title>{props.isEdit ? "edit" : "posts"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Writer
              type="text"
              placeholder="wtie name."
              {...props.register("writer")}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
            />
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Password
              type="password"
              placeholder="write password."
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Subject
            type="text"
            placeholder="write title."
            {...props.register("title")}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Contents
            placeholder="write content."
            {...props.register("contents")}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.ZipcodeWrapper>
            <S.State
              placeholder="state"
              {...props.register("boardAddress.state")}
              defaultValue={props.data?.fetchBoard.boardAddress?.state ?? ""}
            />
            <S.Address
              placeholder="postal code"
              {...props.register("boardAddress.zipcode")}
              defaultValue={props.data?.fetchBoard.boardAddress?.zipcode ?? ""}
            />
            <S.AddressCity
              placeholder="city"
              {...props.register("boardAddress.city")}
              defaultValue={props.data?.fetchBoard.boardAddress?.city ?? ""}
            />
            <S.AddressDetail
              placeholder="address"
              {...props.register("boardAddress.address")}
              defaultValue={props.data?.fetchBoard.boardAddress?.address ?? ""}
            />
          </S.ZipcodeWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Youtube
            placeholder="youtube link."
            {...props.register("youtubeUrl")}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.InputWrapper>

        <S.ImageWrapper>
          <S.ImageBox>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageBox>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.OptionWrapper>
            <S.Label>main</S.Label>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">youtube</S.RadioLabel>
            <S.RadioButton type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">image</S.RadioLabel>
          </S.OptionWrapper>

          <S.SubmitButton isActive={props.formState.isValid ?? true}>
            {props.isEdit ? "edit" : "post"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
