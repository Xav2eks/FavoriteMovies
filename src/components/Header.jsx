import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header-container">
        <h1>FAVORITE MOVIE WEBSITE</h1>
      </Link>
    </header>
  );
}

export default Header;
