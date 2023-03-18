import img from "./assets/sample_image.jpg";
import { ArticleCard } from "./components/ArticleCard";
import { ArticlesContainer } from "./styles";

const mockData = new Array(20).fill(1).map((_, i) => ({
  author: "Bobby Lion",
  id: i + 1,
  title:
    "Ozi Eziri Anwuru Oku, Odu la Igwe. Ayomanam, ayomanam ayoduolam oo. Bobby ekele la gi.",
  publishedAt: new Date(),
  content:
    "Woe unto the pastors and imams that lead my ship astray, ther portion shall be a burning lake of high. Their palms shall wither. For leading my people astray. Come a dance come a dance come a dance, come a dance fi my reggae music.",
  urlToImage: img,
}));

function App() {
  return (
    <>
      <h1>Hello from vite and React</h1>
      <ArticlesContainer>
        {mockData.map((data) => (
          <ArticleCard key={data.id} data={data} />
        ))}
      </ArticlesContainer>
    </>
  );
}

export default App;
