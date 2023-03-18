import { SWRConfig } from "swr";
import ArticleList from "./components/ArticleList";
import { ArticlesContainer } from "./styles";
import fetcher from "./lib/fetcher";
import { SectionTitle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "./components/Looaders";
import { ArticleCard } from "./components/ArticleCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, { headers: { "X-Api-Key": API_KEY } })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  if (loading) {
    return (
      <ArticlesContainer>
        <SectionTitle>Top Business Headline</SectionTitle>
        <LoadingSpinner />
      </ArticlesContainer>
    );
  }

  return (
    <>
      <ArticlesContainer>
        <SectionTitle>Top Business Headline</SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        {data.articles.map((data) => (
          <ArticleCard
            key={Math.floor(Math.random() * 999999)}
            data={data}
          />
        ))}
      </ArticlesContainer>
    </>
  );
}

export default App;
