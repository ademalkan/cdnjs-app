"use client";
import HoverAnimation from "@/components/animations/hoverAnimation";
import SearchInput from "@/components/atoms/SearchInput";
import { LatestLinkIcon } from "@/components/icons/LatestLinkIcon";
import { moreShowHelper } from "@/utils/helper";
import Link from "next/link";
import { useGetSearchLibrariesQuery } from "@/stores/services/librariesApi";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [showData, setShowData] = useState({
    showDataStart: 0,
    showDataEnd: 12,
  });
  const { isLoading, isFetching, data, error } = useGetSearchLibrariesQuery({
    search: searchText,
  });

  const moreShowDataHandler = () => {
    setShowData((prevShowData) => ({
      showDataStart: prevShowData.showDataStart + 0,
      showDataEnd: prevShowData.showDataEnd + 12,
    }));
  };

  const visibleData = data?.results.slice(
    showData.showDataStart,
    showData.showDataEnd
  );

  return (
    <main className="w-11/12 m-auto my-6">
      <nav className="mb-6">
        <HoverAnimation whileHoverScaleAmount={1.05}>
          <div className="search">
            <SearchInput setSearchText={setSearchText} />
          </div>
        </HoverAnimation>

        <h6 className="text-lg">Total CDN : {data?.available}</h6>
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
              <Link href={librarie.name.toLocaleLowerCase()}>
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
                      href={librarie.latest}
                      target="_blank"
                    >
                      <LatestLinkIcon />
                    </Link>
                  </div>
                  <div className="mt-2 ">
                    {moreShowHelper(librarie.description)}
                  </div>
                </div>
              </Link>
            </HoverAnimation>
          ))}
      </article>
      <button onClick={moreShowDataHandler}> More Than</button>
    </main>
  );
}
