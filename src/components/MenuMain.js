import * as React from "react";
import "../styles/ComponentMenuMain.css";
import { Link } from "gatsby";

export default function Header({ hideHomeLink }) {
  return (
    <header id="main-menu-header">
      <nav id="main-menu-nav">
        <div id="main-menu-home-container">
          {!hideHomeLink && (
            <Link id="main-menu-link-home" to="/">
              Home
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
