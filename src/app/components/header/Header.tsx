import Image from "next/image";
import React from "react";
import header from "./header.module.scss";

const Header = () => {
  return (
    <header className={header.header}>
      <div className="logo">
        <h2 className="h2">devfinder</h2>
      </div>
    </header>
  );
};

export default Header;
