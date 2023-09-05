import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const LOGINOT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLoginOutUser = () => {
  const mutation = useMutation<Pick<IMutation, "logoutUser">>(LOGINOT_USER);

  return mutation;
};
