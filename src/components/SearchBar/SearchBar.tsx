"use client";
import Image from "next/image";
import classNames from "./search-bar.module.scss";
function SearchBar({
  handleSearch,
  searchType,
  handleToggleSearchInfo,
}: {
  handleSearch: (query: string) => void;
  handleToggleSearchInfo: () => void;
  searchType: "user" | "repo";
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classNames["search-bar"]}
    >
      <div className={classNames["icon"]}>
        <Image
          width={24}
          height={24}
          alt="Search Icon"
          src={"assets/icon-search.svg"}
        />
      </div>
      <input
        type="text"
        placeholder={`${searchType === "user" ? "User" : "Repo"}...`}
        onChange={(e) => handleSearch(e.target.value)}
        data-search-input
      />
      <button
        className={`${classNames["search-type"]}`}
        data-active={searchType === "user"}
        type="button"
        onClick={handleToggleSearchInfo}
      >
        <span>Repo</span>
        <span>User</span>
      </button>
    </form>
  );
}

export default SearchBar;
