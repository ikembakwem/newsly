import React, { Suspense } from "react";
import Articles from "./Articles";
import { LoadingSpinner } from "./Looaders";

const ArticlesContainer = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Articles />
    </Suspense>
  );
};

export default ArticlesContainer;
