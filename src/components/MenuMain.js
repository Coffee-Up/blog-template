import * as React from "react";
import "../styles/ComponentMenuMain.css";
import { Link } from "gatsby";

import { IconWebsite } from "../assets/icons";

export default function Header({ hideHomeLink, headerText }) {
  return (
    <header id="main-menu-header">
      <nav id="main-menu-nav">
        <div id="main-menu-home-container">
          {!hideHomeLink && (
            <Link id="main-menu-link-home" to="/">
              <IconWebsite clickable={true} />
            </Link>
          )}
          {headerText && <h1>{headerText}</h1>}
        </div>
      </nav>
    </header>
  );
}
