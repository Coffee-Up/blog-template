import * as React from "react";
import "../styles/MenuMain.css";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header id="main-menu-header">
      <nav id="main-menu-nav">
        <div id="main-menu-home-container">
          <Link id="main-menu-link" to="/">
            Home
          </Link>
        </div>
        <div id="main-menu-links-container">
          <ul id="main-menu-ul">
            <li>link 2</li>
            <li>link 1</li>
            <li>link 3</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
