"use client";
import { SearchBar } from "@/components";
import UserCards from "@/features/UserCards";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"user" | "repo">("user");

  const handleSearch = useCallback(async (query: string) => {
    if (!query) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      setQuery(query);
    }, 1000); // Adjust the delay as needed
  }, []);

  const handleToggleSearchInfo = () =>
    setSearchType((prev) => (prev === "user" ? "repo" : "user"));
  return (
    <main>
      <SearchBar
        handleSearch={handleSearch}
        handleToggleSearchInfo={handleToggleSearchInfo}
        searchType={searchType}
      />
      {searchType === "user" && <UserCards query={query} />}
      {searchType === "repo" && "repo"}
    </main>
  );
}
