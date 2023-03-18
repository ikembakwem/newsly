import React, { Suspense } from "react";
import useSWR from "swr";
import { ArticleCard } from "./ArticleCard";
import { LoadingSpinner } from "./Looaders";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

const Articles = () => {
  const {
    data: { articles },
  } = useSWR(url);

  console.log(articles);

  return (
    <>
      {articles.map((data) => (
        <Suspense fallback={<LoadingSpinner />}>
          <ArticleCard
            key={Math.floor(Math.random() * 999999)}
            data={data}
          />
        </Suspense>
      ))}
    </>
  );
};

export default Articles;
