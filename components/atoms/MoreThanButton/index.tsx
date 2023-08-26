import HoverAnimation from "@/components/animations/hoverAnimation";
import React, { MouseEventHandler } from "react";

interface MoreThanButtonPropsI {
  length: number;
  showDataEnd: number;
  moreShowDataHandler: MouseEventHandler<HTMLButtonElement>;
}

const MoreThanButton = (props: MoreThanButtonPropsI) => {
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
              {" "}
              More Than
            </button>
          </HoverAnimation>
        </div>
      )}
    </>
  );
};

export default MoreThanButton;
