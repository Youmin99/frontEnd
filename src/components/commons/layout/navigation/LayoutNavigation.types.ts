import type { MouseEvent } from "react";

export interface ILayoutNavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ILayoutNavigation {
  isfront: boolean;
}
