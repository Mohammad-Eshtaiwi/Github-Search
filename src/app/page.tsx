import { SearchBar } from "./components";

export default function Home() {
  const handleSearch = async (query: string) => {
    "use server";
    console.log("query");
  };
  return (
    <main>
      <SearchBar handleSearch={handleSearch} />
    </main>
  );
}
