// We need a js file to use variables theme in our css (css in js ), SASS is not good for debugging , light css in js  + css is better
import { css } from "styled-components";
import theme from "../theme";

const globalThemeTags = css`
  html {
    font-size: 18px;
  }

  body {
    font-size: 1rem;
    font-family: "Montserrat Regular";
  }

  h1 {
    font-family: "Source Code Variable";
    font-weight: 900;
    font-size: 1rem;

    padding: 1rem 0;
  }

  h2 {
    font-family: "Source Code Variable";
    font-weight: 500;
    font-size: 1.3rem;
    padding: 1rem 0;
  }

  h3 {
    font-family: "Source Code Variable";
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  p {
    font-family: "Montserrat Regular";
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
  }

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
`;

export default globalThemeTags;
