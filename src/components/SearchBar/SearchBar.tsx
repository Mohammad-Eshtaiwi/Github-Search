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
        placeholder={`Search GitHub ${searchType}…`}
        onChange={(e) => handleSearch(e.target.value)}
        data-search-input
      />
      <button
        className={`${classNames["search-type"]}`}
        data-active={searchType === "user"}
        type="button"
        onClick={handleToggleSearchInfo}
      >
        <span>User</span>
        <span>Repo</span>
      </button>
    </form>
  );
}

export default SearchBar;
