import * as React from "react";
import { globalHistory } from "@reach/router";
import { Link } from "gatsby";
import "../styles/MenuMain.css";

import { IconWebsite } from "../assets/icons";

export default function Header() {
  const hideHomeLink = globalHistory.location.pathname === "/" ? true : false;

  return (
    <header id="main-menu-header">
      <nav>
        <div id="main-menu-home-container">
          {!hideHomeLink && (
            <Link to="/">
              <IconWebsite idGived="main-menu-svg" clickable={true} />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
