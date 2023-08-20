import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const useMutationCreateBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  return mutation;
};
