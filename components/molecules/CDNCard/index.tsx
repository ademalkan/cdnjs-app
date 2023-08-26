import HoverAnimation from "@/components/animations/hoverAnimation";
import React from "react";
import Link from "next/link";
import { LatestLinkIcon } from "@/components/icons/LatestLinkIcon";
import { moreShowHelper } from "@/utils/helper";
import { Library } from "@/stores/services/types/useGetSearchLibrariesQuery";

const CDNCard = ({ library }: { library: Library }): React.ReactNode => {
  return (
    <HoverAnimation>
      <Link href={library?.name?.toLocaleLowerCase() || "#"}>
        <div className="bg-slate-100 p-4 rounded-lg shadow-md">
          <div
            className="
                  bg-slate-50 
                  rounded-md 
                  p-1 
                  flex 
                  justify-between 
                  items-center"
          >
            {library?.name?.toLocaleLowerCase()}
            (v{library.version})
            <LatestLinkIcon />
          </div>
          <div className="mt-2 ">{moreShowHelper(library?.description)}</div>
        </div>
      </Link>
    </HoverAnimation>
  );
};

export default CDNCard;
