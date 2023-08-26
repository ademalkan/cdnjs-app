import { addSpaceWithComma } from "@/utils/helper";
import Link from "next/link";
import type React from "react";

interface LibraryDetailPropsI {
  library: LibraryI;
}

interface LibraryI {
  name: string;
  description: string;
  version: string;
  license: string;
  author: string;
  keywords: string[];
  homepage: string;
  latest: string;
}

const LibraryDetail = (props: LibraryDetailPropsI): React.ReactNode => {
  const { library } = props;
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{library.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">
            {library.description || "No description available."}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Latest Version</h2>
          <p className="text-gray-600">
            {library.version || "No version available."}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">License</h2>
          <p className="text-gray-600">
            {library.license || "No license available."}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Author</h2>
          <p className="text-gray-600">
            {library.author || "No author available."}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Keywords</h2>
          <p className="text-gray-600">
            {addSpaceWithComma(library.keywords || [""]) ||
              "No keywords available."}
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          href={library.homepage || "#"}
          className="text-white bg-slate-400 p-2 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Homepage
        </Link>
        <Link
          href={library.latest || "#"}
          className="text-white bg-slate-400 p-2 rounded-md ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Latest Version
        </Link>
      </div>
    </div>
  );
};

export default LibraryDetail;
