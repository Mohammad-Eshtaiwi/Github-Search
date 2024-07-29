"use client";
import Image from "next/image";
import classNames from "./search-bar.module.scss";
function SearchBar({
  handleSearch,
}: {
  handleSearch: (query: string) => void;
}) {
  return (
    <form className={classNames["search-bar"]}>
      <div className="icon">
        <Image
          width={24}
          height={24}
          alt="Search Icon"
          src={"assets/icon-search.svg"}
        />
      </div>
      <input
        type="text"
        placeholder="Search GitHub username…"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <p className={classNames["error"]}>No results</p>
    </form>
  );
}

export default SearchBar;
