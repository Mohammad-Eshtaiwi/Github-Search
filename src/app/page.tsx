"use client";
import { SearchBar } from "@/components";
import UserCard from "@/components/UserCard";
import UserCardClasses from "@/components/UserCard/user-card.module.scss";
import getUsers from "@/services/getUsers";
import { useCallback, useRef } from "react";

export default function Home() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback(async (query: string) => {
    if (!query) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      getUsers(query).then(({ users, nextLink }) => {
        console.log({ users });

        console.log({ nextLink });
      });
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <main>
      <SearchBar handleSearch={handleSearch} />
      <div className={UserCardClasses.container}>
        <UserCard />
      </div>
    </main>
  );
}
