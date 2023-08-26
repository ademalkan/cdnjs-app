import HoverAnimation from "../../../components/animations/hoverAnimation";
import React from "react";
import { MoreThanButtonPropsI } from "./interface";

const MoreThanButton = (props: MoreThanButtonPropsI): React.ReactNode => {
  const { length, showDataEnd, moreShowDataHandler } = props;
  return (
    <>
      {(length || 0) > showDataEnd && (
        <div className="flex justify-center items-center mt-10">
          <HoverAnimation>
            <button
              className="bg-slate-400 rounded-md p-2 text-white"
              onClick={moreShowDataHandler}
            >
              More Than
            </button>
          </HoverAnimation>
        </div>
      )}
    </>
  );
};

export default MoreThanButton;
