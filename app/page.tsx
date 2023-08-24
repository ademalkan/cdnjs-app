"use client";
import React, { useState, useEffect } from "react";
import HoverAnimation from "@/components/animations/hoverAnimation";
import SearchInput from "@/components/atoms/SearchInput";
import { LatestLinkIcon } from "@/components/icons/LatestLinkIcon";
import { moreShowHelper } from "@/utils/helper";
import Link from "next/link";
import { useGetSearchLibrariesQuery } from "@/stores/services/librariesApi";
import { showDataI } from "./[librarieDetail]/interface";

export default function Home(): React.ReactNode {
  const [searchText, setSearchText] = useState<string>("");
  const [showData, setShowData] = useState<showDataI>({
    showDataStart: 0,
    showDataEnd: 12,
  });

  useEffect(() => {
    setShowData({ showDataStart: 0, showDataEnd: 12 });
  }, [searchText]);

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
            <SearchInput setSearchText={setSearchText} />
          </div>
        </HoverAnimation>

        {data?.available && (
          <h6 className="text-lg">Total CDN : {data.available}</h6>
        )}
      </nav>
      {(isLoading || isFetching) && <div>Loading...</div>}
      {error && <div>Error:</div>}
      {(!isLoading || !isFetching) && (data === undefined || data === null) && (
        <div>No libraries available</div>
      )}
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleData &&
          visibleData?.map((librarie, indexKey) => (
            <HoverAnimation key={indexKey}>
              <Link href={librarie?.name?.toLocaleLowerCase() || "#"}>
                <div
                  key={indexKey}
                  className="bg-slate-100 p-4 rounded-lg shadow-md"
                >
                  <div
                    className="
                  bg-slate-50 
                  rounded-md 
                  p-1 
                  flex 
                  justify-between 
                  items-center"
                  >
                    {librarie.name.toLocaleLowerCase()}
                    (v{librarie.version})
                    <Link
                      title="Go to latest version"
                      href={librarie?.latest || "#"}
                      target="_blank"
                    >
                      <LatestLinkIcon />
                    </Link>
                  </div>
                  <div className="mt-2 ">
                    {moreShowHelper(librarie?.description)}
                  </div>
                </div>
              </Link>
            </HoverAnimation>
          ))}
      </article>

      {(data?.results.length || 0) > showData.showDataEnd && (
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
    </main>
  );
}
