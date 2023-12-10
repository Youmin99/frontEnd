import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IHomeListUIProps {
  data?: Pick<IQuery, "fetchBestBoards">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBestBoards">>>;
  count?: number;

  keyword: string;
  onChangeKeyword: (value: string) => void;
}
