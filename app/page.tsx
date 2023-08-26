"use client";
import React, { useState } from "react";
import HoverAnimation from "@/components/animations/hoverAnimation";
import SearchInput from "@/components/atoms/SearchInput";
import { useGetSearchLibrariesQuery } from "@/stores/services/librariesApi";
import { showDataI } from "./[libraryDetail]/interface";
import PageContentLoader from "@/components/molecules/PageContentLoader";
import MoreThanButton from "@/components/atoms/MoreThanButton";
import CDNList from "@/components/organisms/CDNList";

export default function Home(): React.ReactNode {
  const [searchText, setSearchText] = useState<string>("");
  const [showData, setShowData] = useState<showDataI>({
    showDataStart: 0,
    showDataEnd: 12,
  });

  const { isLoading, isFetching, data, error } = useGetSearchLibrariesQuery({
    search: searchText,
  });

  const visibleData = data?.results.slice(
    showData.showDataStart,
    showData.showDataEnd
  );

  const moreShowDataHandler = () => {
    setShowData((prevShowData) => ({
      showDataStart: prevShowData.showDataStart + 0,
      showDataEnd: prevShowData.showDataEnd + 12,
    }));
  };

  return (
    <main className="w-11/12 m-auto my-6">
      <nav className="mb-6">
        <HoverAnimation whileHoverScaleAmount={1.05}>
          <div className="search">
            <SearchInput
              setSearchText={setSearchText}
              setShowData={setShowData}
            />
          </div>
        </HoverAnimation>

        {data?.available && (
          <h6 className="text-lg">Total CDN : {data.available}</h6>
        )}
      </nav>

      {(isLoading || isFetching) && <PageContentLoader />}
      {error && <div>Error:</div>}
      {!isLoading || !isFetching || data === undefined || data === null || (
        <div>No libraries available</div>
      )}

      <CDNList CDNListData={visibleData} />

      <MoreThanButton
        length={data?.results?.length || 0}
        showDataEnd={showData.showDataEnd}
        moreShowDataHandler={moreShowDataHandler}
      />
    </main>
  );
}
