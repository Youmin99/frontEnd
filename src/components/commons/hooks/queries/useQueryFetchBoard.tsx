import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        city
        state
      }
      createdAt
      youtubeUrl
      images
    }
  }
`;

export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables }
  );
  return query;
};
