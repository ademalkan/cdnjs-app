import { ReactNode } from "react";

export interface HoverAnimationI {
  children: ReactNode;
  whileHoverScaleAmount?: number;
  whileTabScaleAmount?: number;
  transitionAmount?: number;
}
