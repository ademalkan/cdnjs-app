"use client";
import React, { useState } from "react";
import HoverAnimation from "@/components/animations/hoverAnimation";
import SearchInput from "@/components/atoms/SearchInput";
import { useGetSearchLibrariesQuery } from "@/stores/services/librariesApi";
import { showDataI } from "./[libraryDetail]/interface";
import PageContentLoader from "@/components/molecules/PageContentLoader";
import MoreThanButton from "@/components/atoms/MoreThanButton";
import CDNList from "@/components/organisms/CDNList";
import Image from "next/image";
import ErrorContent from "@/components/molecules/ErrorContent";

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

        {data?.available !== 0 && (
          <h6 className="text-lg">Total CDN : {data?.available}</h6>
        )}
      </nav>

      {(isLoading || isFetching) && <PageContentLoader />}
      {error && <ErrorContent />}

      {visibleData?.length === 0 && (
        <div className="flex items-center justify-center flex-col h-3/5">
          <Image
            src={"/images/searchImage.gif"}
            width={300}
            height={100}
            alt="Not Found Search"
          />
          <h4 className="text-xl">
            No results were found for{" "}
            <span className="font-bold">{searchText}</span>. try looking for
            something else
          </h4>
        </div>
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
