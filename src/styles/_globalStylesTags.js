// We need a js file to use variables theme in our css (css in js ), SASS is not good for debugging , light css in js  + css is better
import { css } from "styled-components";

const globalThemeTags = css`
  html {
    font-size: 22px;
  }

  body {
    font-size: 1rem;
    font-family: "Montserrat Regular";
  }

  h1 {
    font-family: "Montserrat Bold";
    font-weight: 900;
    font-size: 1.4rem;
    margin-bottom: 1em;
  }

  h2 {
    font-family: "Source Code Variable";
    font-weight: 500;
    font-size: 1.2rem !important;
  }

  h3 {
    font-family: "Source Code Variable";
    font-weight: 500;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 0.4em;
    font-size: 1rem;
    font-family: "Montserrat Regular";
    line-height: 1.4em;
    color: black;
  }
  /* Don't put <a> first because p is sometimes in a <a> */
  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    animation: mouseOnAnchorTag 0.2s ease-out forwards;
  }

  li {
    font-size: 1rem;
  }

  span {
    font-family: "Montserrat Bold";
    // need span to inherit size when in a h1, h2, p
    font-size: inherit;
  }
  /*---------------------------------------------------------------------------*/
  /* MEDIA QUERIES */
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 0.8rem;
    }

    body {
      font-size: 0.5rem;
    }
  }
  /* MEDIA QUERIES */
  @media screen and (max-width: 600px) {
    html {
      /* Gives me the power to adjust generaly the size of tags (less spaguetty code) */
      font-size: 18px;
    }
  }
`;

export default globalThemeTags;
