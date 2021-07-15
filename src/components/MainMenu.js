import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/MainMenu.css";
import { v4 as uuidv4 } from "uuid";

import menuLinks from "../json/menuLinks";
import { IconCHR, IconArrow, IconFacebook } from "../assets/icons";

const MainMenu = () => {
  const [currentLabelMenu, updateCurrentLabelMenu] = useState("");
  const [mouseOnMenu, updateMouseOnMenu] = useState(false);

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
    <header aria-hidden="true" id="header-main-menu" onMouseLeave={onMenuLeave}>
      <nav>
        <div
          aria-hidden="true"
          onMouseEnter={onMenuEnter}
          onMouseLeave={onMenuLeave}
        >
          <ul>
            <li>
              <Link to="/">
                <IconCHR id="main-menu-logo" clickable />
                <h2>CHR</h2>
              </Link>
            </li>
            {menuLinks.map((menuSection) => {
              return (
                <React.Fragment key={uuidv4()}>
                  {menuSection.subSections && (
                    <li key={uuidv4()}>
                      <div
                        aria-hidden="true"
                        onMouseEnter={($event) => onMouseEnterLink($event)}
                        onMouseLeave={onMouseLeaveLink}
                      >
                        <Link
                          onMouseEnter={($event) => onMouseEnterLink($event)}
                          to={menuSection.url}
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === menuSection.label
                              ? "g-color-white"
                              : mouseOnMenu
                              ? "g-color-grey"
                              : !mouseOnMenu
                              ? "g-color-white"
                              : "g-color-grey"
                          }
                        >
                          <h3>{menuSection.label}</h3>
                        </Link>
                        <IconArrow
                          size="20px"
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === menuSection.label
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
                                <li key={uuidv4()}>
                                  <div className="main-menu-subsection-category-container">
                                    <p>{subSection.label}</p>
                                    {subSection.links.map((link) => (
                                      <Link key={uuidv4()} to={link.url}>
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </li>
                              );
                            })}
                          </div>
                        </ul>
                      </div>
                    </li>
                  )}
                  {!menuSection.subSections && (
                    <li key={uuidv4()}>
                      <div
                        aria-hidden="true"
                        onMouseEnter={($event) => onMouseEnterLink($event)}
                      >
                        <Link
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === menuSection.label
                              ? "g-color-white"
                              : mouseOnMenu
                              ? "g-color-grey"
                              : !mouseOnMenu
                              ? "g-color-white"
                              : "g-color-grey"
                          }
                          to={menuSection.url}
                        >
                          <h3>{menuSection.label}</h3>
                        </Link>
                      </div>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
            <li id="facebook-link">
              <a
                href="https://www.facebook.com/CHRugby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook id="main-menu-logo-facebook" clickable />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainMenu;
