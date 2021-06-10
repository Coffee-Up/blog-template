import * as React from "react";
import "../styles/MenuMain.css";
import { Link } from "gatsby";

import { IconWebsite } from "../assets/icons";

export default function Header({ hideHomeLink }) {
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
