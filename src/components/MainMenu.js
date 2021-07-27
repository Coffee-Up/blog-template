import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import "../styles/MainMenu.css";

import { IconCHR, IconArrow, IconFacebook } from "../assets/icons";
import { retrieveUniqueKeys } from "../utils/arrayHelper";

const MainMenu = () => {
  const [currentLabelMenu, updateCurrentLabelMenu] = useState("");
  const [mouseOnMenu, updateMouseOnMenu] = useState(false);
  const [links, updateLinks] = useState([]);

  const data = useStaticQuery(graphql`
    query LayoutPage {
      prismicMenuPrincipal {
        data {
          couleur_border_souris_sur_lien
          couleur_de_fond_sous_menus
          couleur_liens_principaux
          couleur_liens_sous_menus
          couleur_principale
          couleur_sections_sous_menus
          couleur_selection_lien
          body {
            ... on PrismicMenuPrincipalDataBodyLienPrincipal {
              items {
                lien_texte
                lien_url {
                  uid
                }
              }
              primary {
                liens_avec_plusieurs_niveaux
              }
              slice_type
            }
            ... on PrismicMenuPrincipalDataBodySousLiens {
              slice_type
              items {
                sous_lien_texte
                sous_lien_url {
                  uid
                }
              }
              primary {
                sous_lien_categorie
                texte_lien_cible
              }
            }
          }
        }
      }
    }
  `);

  let page = data.prismicMenuPrincipal.data;

  console.log(page);

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
      {
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
              {page.body
                .filter(
                  (item) => item.primary.liens_avec_plusieurs_niveaux === true
                )[0]
                .items.map((lienTwoLevels) => {
                  return (
                    <li key={uuidv4()}>
                      <div
                        aria-hidden="true"
                        onMouseEnter={($event) => onMouseEnterLink($event)}
                        onMouseLeave={onMouseLeaveLink}
                      >
                        <Link
                          onMouseEnter={($event) => onMouseEnterLink($event)}
                          to={`/${lienTwoLevels.lien_url.uid}`}
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === lienTwoLevels.lien_url.uid
                              ? "g-color-white"
                              : mouseOnMenu
                              ? "g-color-grey"
                              : !mouseOnMenu
                              ? "g-color-white"
                              : "g-color-grey"
                          }
                        >
                          <h3>{lienTwoLevels.lien_texte}</h3>
                        </Link>
                        <IconArrow
                          size="20px"
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === lienTwoLevels.lien_texte
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
                            currentLabelMenu === lienTwoLevels.lien_texte
                              ? "g-show-menu-link"
                              : ""
                          }
                        >
                          <div>
                            {page.body
                              .filter(
                                (el) =>
                                  el.slice_type === "sous_liens" &&
                                  el.primary.texte_lien_cible ===
                                    lienTwoLevels.lien_texte
                              )
                              .map((subLinks) => {
                                return (
                                  <li key={uuidv4()}>
                                    <div className="main-menu-subsection-category-container">
                                      <p>
                                        {subLinks.primary.sous_lien_categorie}
                                      </p>
                                      {subLinks.items.map((sublink) => (
                                        <Link
                                          key={uuidv4()}
                                          to={`/${sublink.sous_lien_url.uid}`}
                                        >
                                          {sublink.sous_lien_texte}
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
                  );
                })}
              {page.body
                .filter(
                  (item) => item.primary.liens_avec_plusieurs_niveaux === false
                )[0]
                .items.map((linkOneLevelOnly) => {
                  return (
                    <li key={uuidv4()}>
                      <div
                        aria-hidden="true"
                        onMouseEnter={($event) => onMouseEnterLink($event)}
                      >
                        <Link
                          className={
                            mouseOnMenu &&
                            currentLabelMenu === linkOneLevelOnly.lien_texte
                              ? "g-color-white"
                              : mouseOnMenu
                              ? "g-color-grey"
                              : !mouseOnMenu
                              ? "g-color-white"
                              : "g-color-grey"
                          }
                          to={`/${linkOneLevelOnly.lien_url.uid}`}
                        >
                          <h3>{linkOneLevelOnly.lien_texte}</h3>
                        </Link>
                      </div>
                    </li>
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
      }
    </header>
  );
};

export default MainMenu;
