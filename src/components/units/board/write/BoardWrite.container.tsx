import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
// import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { Address } from "react-daum-postcode";
import { useMutationCreateBoard } from "../../../commons/hooks/mutations/useMutationCreateBoard";
// import { useMutationUpdateBoard } from "../../../commons/hooks/mutations/useMutationUpdateBoard";
import { useForm } from "react-hook-form";
import { schema } from "../../../commons/yup";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [createBoard] = useMutationCreateBoard();
  // const [updateBoard] = useMutationUpdateBoard();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any): Promise<void> => {
    console.log(data);
    if (
      data.writer !== "" &&
      data.password !== "" &&
      data.title !== "" &&
      data.contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (
      data.writer !== "" &&
      data.password !== "" &&
      data.title !== "" &&
      data.contents !== ""
    ) {
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
                zipcode,
                address,
                addressDetail: data.boardAddress.addressDetail,
              },
            },
          },
        });

        console.log(result.data?.createBoard._id);
        if (result.data?.createBoard._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }

        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onClickUpdate = async (): Promise<void> => {
    // if (
    //   title === "" &&
    //   contents === "" &&
    //   youtubeUrl === "" &&
    //   address === "" &&
    //   addressDetail === "" &&
    //   zipcode === ""
    // ) {
    //   alert("수정한 내용이 없습니다.");
    //   return;
    // }
    // if (password === "") {
    //   alert("비밀번호를 입력해주세요.");
    //   return;
    // }
    // const updateBoardInput: IUpdateBoardInput = {};
    // if (title !== "") updateBoardInput.title = title;
    // if (contents !== "") updateBoardInput.contents = contents;
    // if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    // if (zipcode !== "" || address !== "" || addressDetail !== "") {
    //   updateBoardInput.boardAddress = {};
    //   if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
    //   if (address !== "") updateBoardInput.boardAddress.address = address;
    //   if (addressDetail !== "")
    //     updateBoardInput.boardAddress.addressDetail = addressDetail;
    // }
    // try {
    //   if (typeof router.query.boardId !== "string") {
    //     alert("시스템에 문제가 있습니다.");
    //     return;
    //   }
    //   const result = await updateBoard({
    //     variables: {
    //       boardId: router.query.boardId,
    //       password,
    //       updateBoardInput,
    //     },
    //   });
    //   if (result.data?.updateBoard._id === undefined) {
    //     alert("요청에 문제가 있습니다.");
    //     return;
    //   }
    //   void router.push(`/boards/${result.data?.updateBoard._id}`);
    // } catch (error) {
    //   if (error instanceof Error) alert(error.message);
    // }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
    />
  );
}
