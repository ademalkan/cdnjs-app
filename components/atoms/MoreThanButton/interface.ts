import { MouseEventHandler } from "react";

export interface MoreThanButtonPropsI {
  length: number;
  showDataEnd: number;
  moreShowDataHandler: MouseEventHandler<HTMLButtonElement>;
}
