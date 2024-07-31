"use client";
import { SearchBar } from "@/components";
import UserCards from "@/features/UserCards";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(async (query: string) => {
    if (!query) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      setQuery(query);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <main>
      <SearchBar handleSearch={handleSearch} />
      <UserCards query={query} />
    </main>
  );
}
