import React, { useState } from "react";
import { globalHistory } from "@reach/router";
import { Link } from "gatsby";
import "../styles/MainMenu.css";

import menuLinks from "../menuLinks";
import { IconCHR, IconArrow, IconFacebook } from "../assets/icons";

const MainMenu = () => {
  const [currentLabelMenu, updateCurrentLabelMenu] = useState("");
  const [mouseOnMenu, updateMouseOnMenu] = useState(false);

  const hideHomeLink = globalHistory.location.pathname === "/" ? true : false;

  const onMouseEnterLink = ($event) => {
    if ($event.target.nodeName === "svg") return;
    updateCurrentLabelMenu($event.target.innerText);
  };

  const onMouseLeaveLink = () => {
    updateCurrentLabelMenu("");
  };

  const onMenuEnter = () => {
    updateMouseOnMenu(true);
  };

  const onMenuLeave = () => {
    onMouseLeaveLink("");
    updateMouseOnMenu(false);
  };
  return (
    <header id="header-main-menu" onMouseLeave={onMenuLeave}>
      <nav>
        <ul>
          <div onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
            <Link to="/">
              <IconCHR id="main-menu-logo" clickable />
              <h2>CHR</h2>
            </Link>
            {menuLinks.map((menuSection) => {
              return (
                <>
                  {menuSection.subSections && (
                    <div
                      onMouseEnter={($event) => onMouseEnterLink($event)}
                      onMouseLeave={onMouseLeaveLink}
                    >
                      <Link
                        onMouseEnter={($event) => onMouseEnterLink($event)}
                        to={menuSection.url}
                        className={
                          mouseOnMenu && currentLabelMenu === menuSection.label
                            ? "g-color-white"
                            : mouseOnMenu
                            ? "g-color-grey"
                            : !mouseOnMenu
                            ? "g-color-white"
                            : "g-color-grey"
                        }
                      >
                        {menuSection.label}
                      </Link>
                      <IconArrow
                        size="20px"
                        className={
                          mouseOnMenu && currentLabelMenu === menuSection.label
                            ? "g-logo-path-to-fill-white"
                            : mouseOnMenu
                            ? "g-logo-path-to-fill-grey"
                            : !mouseOnMenu
                            ? "g-logo-path-to-fill-grey"
                            : "g-logo-path-to-fill-grey"
                        }
                      />

                      <ul
                        className="g-hidden"
                        id={
                          currentLabelMenu === menuSection.label
                            ? "g-show-menu-link"
                            : ""
                        }
                      >
                        <div>
                          {menuSection.subSections.map((subSection) => {
                            return (
                              <li>
                                <div className="main-menu-subsection-category-container">
                                  <p>{subSection.label}</p>
                                  {subSection.links.map((link) => (
                                    <Link to={link.url}>{link.label}</Link>
                                  ))}
                                </div>
                              </li>
                            );
                          })}
                        </div>
                      </ul>
                    </div>
                  )}
                  {!menuSection.subSections && (
                    <div onMouseEnter={($event) => onMouseEnterLink($event)}>
                      <Link
                        className={
                          mouseOnMenu && currentLabelMenu === menuSection.label
                            ? "g-color-white"
                            : mouseOnMenu
                            ? "g-color-grey"
                            : !mouseOnMenu
                            ? "g-color-white"
                            : "g-color-grey"
                        }
                        to={menuSection.url}
                      >
                        {menuSection.label}
                      </Link>
                    </div>
                  )}
                </>
              );
            })}
            <IconFacebook id="main-menu-logo-facebook" clickable />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainMenu;
