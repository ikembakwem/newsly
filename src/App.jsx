import { SWRConfig } from "swr";
import ArticleList from "./components/ArticleList";
import { ArticlesContainer } from "./styles";
import fetcher from "./lib/fetcher";
import { SectionTitle } from "./styles";

function App() {
  return (
    <>
      <ArticlesContainer>
        <SectionTitle>Top Business Headline</SectionTitle>
      </ArticlesContainer>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <ArticlesContainer>
          <ArticleList />
        </ArticlesContainer>
      </SWRConfig>
    </>
  );
}

export default App;
