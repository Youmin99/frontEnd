import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BESTBOARDS = gql`
  query fetchBestBoards {
    fetchBestBoards {
      _id
      writer
      title
      createdAt
      likeCount
    }
  }
`;

export const useQueryFetchBestBoards = () => {
  const query = useQuery<Pick<IQuery, "fetchBestBoards">>(FETCH_BESTBOARDS);

  return query;
};
