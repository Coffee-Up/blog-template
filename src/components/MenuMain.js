import * as React from "react";
import "../styles/MenuMain.css";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header id="main-menu-header">
      <nav id="main-menu-nav">
        <ul id="main-menu-ul">
          <Link to="/">Home</Link>
        </ul>
      </nav>
    </header>
  );
}
