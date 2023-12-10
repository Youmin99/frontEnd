// import { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: (event: string) => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
