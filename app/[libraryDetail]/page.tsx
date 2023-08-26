"use client";
import { useGetOneByLibrarieQuery } from "@/stores/services/librariesApi";
import React from "react";
import PageContentLoader from "@/components/molecules/PageContentLoader";
import LibraryDetail from "@/components/organisms/LibraryDetail";

interface LibraryDetailParamsI {
  libraryDetail: string;
}

const LibraryDetailPage = ({
  params,
}: {
  params: LibraryDetailParamsI;
}): React.ReactNode => {
  const { libraryDetail } = params;
  const { isLoading, isFetching, data, error } = useGetOneByLibrarieQuery({
    librarie: libraryDetail,
  });

  return (
    <div className="container mx-auto  w-4/6 md-w-11/12 py-8">
      <div className="card p-6 md:p-8 bg-white shadow-md rounded-lg">
        {(isLoading || isFetching) && <PageContentLoader />}
        {error && <div>Error</div>}
        {(!isLoading || !isFetching) &&
        (data === undefined || data === null) && (
          <div>No libraries available</div>
        )}
        {data && <LibraryDetail library={data} />}
      </div>
    </div>
  );
};

export default LibraryDetailPage;
