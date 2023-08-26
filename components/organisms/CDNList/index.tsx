import CDNCard from "../../../components/molecules/CDNCard";
import { Library } from "../../../stores/services/types/useGetSearchLibrariesQuery";
import React from "react";

const CDNList = ({
  CDNListData,
}: {
  CDNListData?: Library[];
}): React.ReactNode => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CDNListData &&
        CDNListData?.map((library, indexKey) => (
          <CDNCard key={indexKey} library={library} />
        ))}
    </article>
  );
};

export default CDNList;
