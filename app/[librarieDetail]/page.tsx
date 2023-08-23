"use client";
import { useGetOneByLibrarieQuery } from "@/stores/services/librariesApi";
import React from "react";
import Link from "next/link";
import { addSpaceWithComma } from "@/utils/helper";

interface LibrarieDetailI {
  librarieDetail: string;
}

const LibrarieDetail = ({
  params,
}: {
  params: LibrarieDetailI;
}): React.ReactNode => {
  const { librarieDetail } = params;
  const { isLoading, isFetching, data, error } = useGetOneByLibrarieQuery({
    librarie: librarieDetail,
  });

  return (
    <div className="container mx-auto  w-4/6 md-w-11/12 py-8">
      <div className="card p-6 md:p-8 bg-white shadow-md rounded-lg">
        {(isLoading || isFetching) && <div>Loading...</div>}
        {error && <div>Error</div>}
        {(!isLoading || !isFetching) &&
          (data === undefined || data === null) && (
            <div>No libraries available</div>
          )}
        {data && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-600">
                  {data.description || "No description available."}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Latest Version</h2>
                <p className="text-gray-600">
                  {data.version || "No version available."}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">License</h2>
                <p className="text-gray-600">
                  {data.license || "No license available."}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Author</h2>
                <p className="text-gray-600">
                  {data.author || "No author available."}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Keywords</h2>
                <p className="text-gray-600">
                  {addSpaceWithComma(data.keywords || [""]) ||
                    "No keywords available."}
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href={data.homepage || "#"}
                className="text-white bg-slate-400 p-2 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Visit Homepage
              </Link>
              <Link
                href={data.latest || "#"}
                className="text-white bg-slate-400 p-2 rounded-md ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Latest Version
              </Link>
              <Link
                href={data.latest || "#"}
                className="text-white bg-slate-400 p-2 rounded-md ml-1"
                download
                rel="noopener noreferrer"
              >
                {" "}
                Download Latest Version
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibrarieDetail;
