import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const useQueryFetchBoards = () => {
  const query = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  return query;
};
