import React from "react";
import ContentLoader from "react-content-loader";

const PageContentLoader = (): React.ReactNode => {
  return (
    <ContentLoader viewBox="0 0 260 80">
      <rect x="0" y="0" rx="2" ry="2" width="260" height="80" />
    </ContentLoader>
  );
};

export default PageContentLoader;
