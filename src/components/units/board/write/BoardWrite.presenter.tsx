import { wrapAsync } from "../../../commons/hooks/customs/wrapAsync";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper
        onSubmit={
          props.isEdit
            ? props.onClickUpdate
            : wrapAsync(props.handleSubmit(props.onClickSubmit))
        }
      >
        <S.Title>{props.isEdit ? "edit" : "posts"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>user</S.Label>
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
            <S.Label>password</S.Label>
            <S.Password
              type="password"
              placeholder="write password."
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>title</S.Label>
          <S.Subject
            type="text"
            placeholder="write title."
            {...props.register("title")}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>content</S.Label>
          <S.Contents
            placeholder="write content."
            {...props.register("contents")}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>address</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <S.SearchButton onClick={props.onClickAddressSearch}>
              search address
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <S.Address
            {...props.register("boardAddress.addressDetail")}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>youtube</S.Label>
          <S.Youtube
            placeholder="copy link."
            {...props.register("youtubeUrl")}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>image</S.Label>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.OptionWrapper>
            <S.Label>main</S.Label>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">youtube</S.RadioLabel>
            <S.RadioButton type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">image</S.RadioLabel>
          </S.OptionWrapper>

          <S.SubmitButton isActive={props.isEdit ? true : props.isActive}>
            {props.isEdit ? "edit" : "post"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
